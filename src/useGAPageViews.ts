import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gaEvent } from './analytics';

export function useGAPageViews() {
  const location = useLocation();

  useEffect(() => {
    // initial + every route change
    gaEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search,
    });
  }, [location]);
}