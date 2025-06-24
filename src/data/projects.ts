import { useProjects } from '../hooks/useFirebaseProjects';
import { FirebaseProject } from '../types/firebase';

export type Project = FirebaseProject;

export const useProjectsData = () => {
  return useProjects();
};

export const getProjectsByCategory = (
  projects: Project[],
  category: string
) => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (projects: Project[]) => {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);
};
