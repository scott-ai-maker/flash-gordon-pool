export type AnalyticsParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    gtag?: (command: string, eventName: string, params?: AnalyticsParams) => void;
    dataLayer?: unknown[];
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params);
    return;
  }

  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: eventName, ...params });
  }
}
