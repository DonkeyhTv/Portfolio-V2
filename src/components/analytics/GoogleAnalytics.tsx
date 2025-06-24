// src/components/analytics/GoogleAnalytics.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_TRACKING_ID = 'G-EGBHW2QJ96';

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Ne pas charger en développement
    if (import.meta.env.DEV) {
      console.log('Google Analytics désactivé en développement');
      return;
    }

    // Vérifier si le script est déjà chargé
    if (
      document.querySelector(
        `script[src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`
      )
    ) {
      return;
    }

    // Initialiser dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_path: location.pathname,
    });

    // Charger le script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;

    // Gérer les erreurs (bloqueurs de pub)
    script.onerror = () => {
      console.info(
        'Google Analytics non disponible (bloqueur de publicités ?)'
      );
    };

    // Ajouter le script seulement s'il n'est pas bloqué
    try {
      document.head.appendChild(script);
    } catch (error) {
      console.info('Google Analytics non chargé');
    }
  }, []);

  // Tracker les changements de page
  useEffect(() => {
    if (window.gtag && !import.meta.env.DEV) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}
