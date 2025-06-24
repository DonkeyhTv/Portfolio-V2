import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  Timestamp,
  DocumentData,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { FirebaseProject } from '../types/firebase';

const convertTimestampsToDates = (data: DocumentData) => {
  const converted = { ...data };
  Object.keys(converted).forEach((key) => {
    if (converted[key] instanceof Timestamp) {
      converted[key] = converted[key].toDate();
    }
  });
  return converted;
};

export const projectService = {
  async getAll(): Promise<FirebaseProject[]> {
    try {
      const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...convertTimestampsToDates(doc.data()),
          }) as FirebaseProject
      );
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  async getFeatured(): Promise<FirebaseProject[]> {
    try {
      const q = query(
        collection(db, 'projects'),
        where('featured', '==', true),
        orderBy('order', 'asc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...convertTimestampsToDates(doc.data()),
          }) as FirebaseProject
      );
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      return [];
    }
  },

  async getById(id: string): Promise<FirebaseProject | null> {
    try {
      const docRef = doc(db, 'projects', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...convertTimestampsToDates(docSnap.data()),
        } as FirebaseProject;
      }
      return null;
    } catch (error) {
      console.error('Error fetching project:', error);
      return null;
    }
  },

  async create(project: Omit<FirebaseProject, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'projects'), {
        ...project,
        createdAt: Timestamp.fromDate(project.createdAt),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  },

  async update(id: string, project: Partial<FirebaseProject>): Promise<void> {
    try {
      const docRef = doc(db, 'projects', id);
      const updateData: any = { ...project };
      if (project.createdAt) {
        updateData.createdAt = Timestamp.fromDate(project.createdAt);
      }
      await updateDoc(docRef, updateData);
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  },

  async delete(id: string): Promise<void> {
    try {
      await deleteDoc(doc(db, 'projects', id));
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  },
};
