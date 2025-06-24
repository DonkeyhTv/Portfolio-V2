import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';

// Commentez temporairement les imports qui pourraient causer problème
// import GoogleAnalytics from './components/analytics/GoogleAnalytics';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Import direct pour débugger
import AdminDashboardOffline from './pages/admin/Dashboard';
import AdminMessages from './pages/admin/Messages';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          {/* Commenté temporairement : <GoogleAnalytics /> */}
          <AnimatePresence mode="wait">
            <Suspense fallback={<LoadingScreen />}>
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/contact" element={<ContactPage />} />

                  <Route path="/admin" element={<AdminDashboardOffline />} />
                  <Route
                    path="/admin/dashboard"
                    element={<AdminDashboardOffline />}
                  />
                  <Route path="/admin/messages" element={<AdminMessages />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Layout>
            </Suspense>
          </AnimatePresence>
        </Router>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--background)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
            },
          }}
        />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
