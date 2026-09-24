import { initialProjects } from '../data/projectsData';
import { initialSkills } from '../data/skillsData';

// API base URL can be customized via .env (VITE_API_URL), default to local backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Helper to fetch with timeout so slow/unreachable backends don't freeze the UI
 */
const fetchWithTimeout = async (url, options = {}, timeoutMs = 2500) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
};

export const api = {
  /**
   * Fetch projects from backend, with graceful fallback to local data
   */
  async getProjects() {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/projects`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      return Array.isArray(data) && data.length > 0 ? data : initialProjects;
    } catch (err) {
      // Fallback seamlessly to local data
      return initialProjects;
    }
  },

  /**
   * Fetch skills from backend, with graceful fallback to local data
   */
  async getSkills() {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/skills`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      return Array.isArray(data) && data.length > 0 ? data : initialSkills;
    } catch (err) {
      // Fallback seamlessly to local data
      return initialSkills;
    }
  },

  /**
   * Fetch dynamic status (e.g. "Open to project collaborations")
   */
  async getStatus() {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/status`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      return {
        status: 'Open to project collaborations and freelance work.',
        timestamp: new Date().toISOString(),
      };
    }
  },

  /**
   * Send a direct contact message to backend / database
   */
  async sendContactMessage(payload) {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }, 5000);

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      return data;
    } catch (err) {
      throw err;
    }
  },

  /**
   * Non-blocking analytics tracker for button & link clicks
   */
  trackClick(eventType, label) {
    try {
      const payload = JSON.stringify({
        event: eventType,
        label,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      });

      // Use sendBeacon if available for zero UI blocking
      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: 'application/json' });
        navigator.sendBeacon(`${API_BASE_URL}/analytics/click`, blob);
      } else {
        fetch(`${API_BASE_URL}/analytics/click`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        }).catch(() => {}); // fire and forget
      }
    } catch (e) {
      // Silent catch
    }
  },

  /**
   * Get all received contact messages (Admin)
   */
  async getMessages() {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/contact`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      return [];
    }
  },

  /**
   * Get analytics click statistics (Admin)
   */
  async getStats() {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/analytics/stats`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      return { totalClicks: 0, clicksByItem: {}, recentClicks: [] };
    }
  },

  /**
   * Update live portfolio status (Admin)
   */
  async updateStatus(newStatus) {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      throw err;
    }
  },
};

