import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Contact } from '../types/firebase';

export const contactService = {
  async create(
    contact: Omit<Contact, 'id' | 'createdAt' | 'read'>
  ): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        ...contact,
        createdAt: Timestamp.now(),
        read: false,
      });
      return docRef.id;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },
};
