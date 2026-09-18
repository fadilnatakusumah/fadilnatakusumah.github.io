type GtagParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/** Fire a GA4 event. No-op when GA is not loaded (local dev, blocked, or missing ID). */
export function trackEvent(name: string, params: GtagParams = {}) {
  window.gtag?.("event", name, params)
}
