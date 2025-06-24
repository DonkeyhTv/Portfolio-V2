import { useState, useEffect } from 'react';
import { migrateProjects } from '../utils/migration';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function AdminMigration() {
  const [migrating, setMigrating] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('🔥 Firebase DB initialized:', !!db);

    const checkFirebase = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'projects'));
        console.log('📊 Current projects in Firestore:', snapshot.size);
      } catch (error) {
        console.error('❌ Firebase connection error:', error);
      }
    };

    checkFirebase();
  }, []);

  const handleMigration = async () => {
    if (
      !window.confirm('Are you sure you want to migrate projects to Firebase?')
    ) {
      return;
    }

    setMigrating(true);
    setMessage('Migration in progress...');

    try {
      await migrateProjects();
      setMessage('Migration completed successfully!');
    } catch (error) {
      setMessage('Migration failed. Check console for details.');
      console.error(error);
    } finally {
      setMigrating(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Firebase Migration</h1>

        <div className="space-y-4">
          <p className="text-muted-foreground">
            This will migrate all local projects to Firebase Firestore.
          </p>

          <button
            onClick={handleMigration}
            disabled={migrating}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              migrating
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary text-primary-foreground hover:opacity-90'
            }`}
          >
            {migrating ? 'Migrating...' : 'Start Migration'}
          </button>

          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.includes('success')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
