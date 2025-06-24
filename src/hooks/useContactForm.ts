import { useState } from 'react';
import { contactService } from '../services/contactService';
import { Contact } from '../types/firebase';

export const useContactForm = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendContact = async (
    contact: Omit<Contact, 'id' | 'createdAt' | 'read'>
  ) => {
    try {
      setSending(true);
      setError(null);
      setSuccess(false);
      await contactService.create(contact);
      setSuccess(true);
    } catch (err) {
      setError('Error sending message');
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
  };

  return { sendContact, sending, error, success, resetForm };
};
