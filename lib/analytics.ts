declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window === "undefined") return;

  // Google Analytics 4 (GA4)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // Google Tag Manager (GTM)
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params });
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }

  // Microsoft Clarity
  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }

  // Console log in development mode
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
};

export const trackAppDownload = (source: string) => {
  trackEvent("app_download_click", { source, timestamp: new Date().toISOString() });
};

export const trackArtistRegister = (source: string) => {
  trackEvent("artist_register_click", { source, timestamp: new Date().toISOString() });
};

export const trackBookingClick = (packageTitle?: string) => {
  trackEvent("booking_cta_click", { packageTitle, timestamp: new Date().toISOString() });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent("form_submission", { formName, timestamp: new Date().toISOString() });
};
