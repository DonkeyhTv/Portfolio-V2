import { useState, useEffect } from 'react';
import { projectService } from '../services/projectService';
import { FirebaseProject } from '../types/firebase';

export const useProjects = (featuredOnly = false) => {
  const [projects, setProjects] = useState<FirebaseProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = featuredOnly
          ? await projectService.getFeatured()
          : await projectService.getAll();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Error loading projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [featuredOnly]);

  return { projects, loading, error };
};

export const useProject = (id: string) => {
  const [project, setProject] = useState<FirebaseProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const data = await projectService.getById(id);
        setProject(data);
        setError(null);
      } catch (err) {
        setError('Error loading project');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  return { project, loading, error };
};
