// Google Analytics 4 helpers. The gtag.js snippet is loaded in index.html
// with send_page_view disabled — the SPA reports page views itself on every
// route change (see AnalyticsTracker in App.jsx).

export function trackPageView(path) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

// For custom events, e.g. trackEvent('brochure_download', { product: 'Antarix RF 22' })
export function trackEvent(name, params = {}) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
