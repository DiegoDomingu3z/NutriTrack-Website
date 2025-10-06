declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const gaEvent = (name: string, params?: Record<string, any>) => {
  window.gtag?.('event', name, params);
};