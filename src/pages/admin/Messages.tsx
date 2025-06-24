// src/pages/admin/Messages.tsx
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Mail, Trash2, Check, Clock, User } from 'lucide-react';
import AdminNavigation from './AdminNavigation';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: any;
  read: boolean;
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(
    null
  );

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const messagesData = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as ContactMessage
      );
      setMessages(messagesData);
    } catch (error) {
      console.error('Error fetching messages:', error);
      if (error instanceof Error && error.message.includes('permissions')) {
        alert(
          'Permission denied. Please check your Firebase security rules or authenticate.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      await updateDoc(doc(db, 'contacts', messageId), { read: true });
      setMessages(
        messages.map((msg) =>
          msg.id === messageId ? { ...msg, read: true } : msg
        )
      );
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (!confirm('Delete this message?')) return;

    try {
      await deleteDoc(doc(db, 'contacts', messageId));
      setMessages(messages.filter((msg) => msg.id !== messageId));
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown date';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(date);
  };

  const unreadCount = messages.filter((msg) => !msg.read).length;

  return (
    <>
      <AdminNavigation />

      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Contact Messages</h1>
            <p className="text-muted-foreground">
              {messages.length} total messages • {unreadCount} unread
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading messages...</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {/* Messages List */}
              <div className="md:col-span-1 space-y-2">
                <h2 className="text-lg font-semibold mb-4">Inbox</h2>

                {messages.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No messages yet
                  </p>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => {
                        setSelectedMessage(message);
                        if (!message.read) markAsRead(message.id);
                      }}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedMessage?.id === message.id
                          ? 'bg-primary/10 border-primary'
                          : message.read
                            ? 'bg-card hover:bg-accent'
                            : 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span
                            className={`text-sm ${!message.read ? 'font-semibold' : ''}`}
                          >
                            {message.name}
                          </span>
                        </div>
                        {!message.read && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground mb-1">
                        {message.email}
                      </p>
                      <p className="text-sm truncate">{message.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatDate(message.createdAt)}
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Message Detail */}
              <div className="md:col-span-2">
                {selectedMessage ? (
                  <div className="bg-card rounded-lg p-6 border">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {selectedMessage.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <a
                            href={`mailto:${selectedMessage.email}`}
                            className="flex items-center gap-1 hover:text-primary"
                          >
                            <Mail className="w-4 h-4" />
                            {selectedMessage.email}
                          </a>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {formatDate(selectedMessage.createdAt)}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => markAsRead(selectedMessage.id)}
                          className={`p-2 rounded ${
                            selectedMessage.read
                              ? 'text-green-600 bg-green-50'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                          title={
                            selectedMessage.read
                              ? 'Already read'
                              : 'Mark as read'
                          }
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => deleteMessage(selectedMessage.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                          title="Delete message"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                      <p className="whitespace-pre-wrap">
                        {selectedMessage.message}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t">
                      <a
                        href={`mailto:${selectedMessage.email}?subject=Re: Contact from portfolio`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
                      >
                        <Mail className="w-4 h-4" />
                        Reply by Email
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="bg-card rounded-lg p-6 border">
                    <p className="text-center text-muted-foreground">
                      Select a message to view details
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
