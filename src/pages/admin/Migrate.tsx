import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Trash2, Edit2, Save, X, Plus } from 'lucide-react';

interface ProjectForm {
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  tags: string[];
  category: 'web' | 'website' | 'fullstack';
  featured: boolean;
  order: number;
  demoLink: string;
  githubLink: string;
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const [formData, setFormData] = useState<ProjectForm>({
    titleFr: '',
    titleEn: '',
    descriptionFr: '',
    descriptionEn: '',
    image: '',
    tags: [],
    category: 'web',
    featured: false,
    order: 1,
    demoLink: '',
    githubLink: '',
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = querySnapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          order: typeof data.order === 'number' ? data.order : 0,
        };
      });
      setProjects(projectsData.sort((a, b) => a.order - b.order));
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      titleFr: '',
      titleEn: '',
      descriptionFr: '',
      descriptionEn: '',
      image: '',
      tags: [],
      category: 'web',
      featured: false,
      order: projects.length + 1,
      demoLink: '',
      githubLink: '',
    });
    setTagInput('');
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const translationKey = formData.titleEn.toLowerCase().replace(/\s+/g, '-');

    const projectData = {
      translationKey,
      translations: {
        fr: {
          title: formData.titleFr,
          description: formData.descriptionFr,
        },
        en: {
          title: formData.titleEn,
          description: formData.descriptionEn,
        },
      },
      image:
        formData.image || `https://picsum.photos/600/400?random=${Date.now()}`,
      tags: formData.tags,
      category: formData.category,
      featured: formData.featured,
      order: formData.order,
      links: {
        demo: formData.demoLink,
        github: formData.githubLink,
      },
      createdAt: editingId ? undefined : Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    try {
      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), projectData);
        console.log('Project updated successfully');
      } else {
        await addDoc(collection(db, 'projects'), projectData);
        console.log('Project added successfully');
      }

      await fetchProjects();
      resetForm();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Error saving project');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await deleteDoc(doc(db, 'projects', id));
      await fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleEdit = (project: any) => {
    setFormData({
      titleFr: project.translations?.fr?.title || '',
      titleEn: project.translations?.en?.title || '',
      descriptionFr: project.translations?.fr?.description || '',
      descriptionEn: project.translations?.en?.description || '',
      image: project.image || '',
      tags: project.tags || [],
      category: project.category || 'web',
      featured: project.featured || false,
      order: project.order || 1,
      demoLink: project.links?.demo || '',
      githubLink: project.links?.github || '',
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const removeTag = (index: number) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((_, i) => i !== index),
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Project Dashboard</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
          >
            <Plus className="w-5 h-5" />
            Add Project
          </button>
        </div>

        {showForm && (
          <div className="bg-card rounded-lg p-6 mb-8 border">
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? 'Edit Project' : 'Add New Project'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title (French)
                  </label>
                  <input
                    type="text"
                    value={formData.titleFr}
                    onChange={(e) =>
                      setFormData({ ...formData, titleFr: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-background border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title (English)
                  </label>
                  <input
                    type="text"
                    value={formData.titleEn}
                    onChange={(e) =>
                      setFormData({ ...formData, titleEn: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-background border rounded-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description (French)
                </label>
                <textarea
                  value={formData.descriptionFr}
                  onChange={(e) =>
                    setFormData({ ...formData, descriptionFr: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-background border rounded-lg"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Description (English)
                </label>
                <textarea
                  value={formData.descriptionEn}
                  onChange={(e) =>
                    setFormData({ ...formData, descriptionEn: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-background border rounded-lg"
                  rows={3}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-background border rounded-lg"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value as any,
                      })
                    }
                    className="w-full px-3 py-2 bg-background border rounded-lg"
                  >
                    <option value="web">Web Application</option>
                    <option value="website">Website</option>
                    <option value="fullstack">Full Stack</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Technologies
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === 'Enter' && (e.preventDefault(), addTag())
                    }
                    className="flex-1 px-3 py-2 bg-background border rounded-lg"
                    placeholder="Add technology (press Enter)"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Demo Link
                  </label>
                  <input
                    type="url"
                    value={formData.demoLink}
                    onChange={(e) =>
                      setFormData({ ...formData, demoLink: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-background border rounded-lg"
                    placeholder="https://demo.example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    GitHub Link
                  </label>
                  <input
                    type="url"
                    value={formData.githubLink}
                    onChange={(e) =>
                      setFormData({ ...formData, githubLink: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-background border rounded-lg"
                    placeholder="https://github.com/username/project"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Order
                  </label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        order: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 bg-background border rounded-lg"
                    min="1"
                  />
                </div>

                <div className="flex items-center pt-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) =>
                        setFormData({ ...formData, featured: e.target.checked })
                      }
                      className="w-4 h-4"
                    />
                    <span>Featured project</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                >
                  <Save className="w-4 h-4" />
                  {editingId ? 'Update' : 'Create'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid gap-4">
          <h2 className="text-xl font-semibold">
            Current Projects ({projects.length})
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="bg-card rounded-lg p-4 border">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold">
                      {project.translations?.fr?.title ||
                        project.translationKey}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      Order: {project.order}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-600 text-xs rounded">
                        Featured
                      </span>
                    )}
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    FR: {project.translations?.fr?.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    EN: {project.translations?.en?.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags?.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm">
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        Demo
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(project)}
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
