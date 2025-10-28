import axios from 'axios';

// Normalize base URL; if user provided host without "/api", append it to match backend routes
function normalizeBaseURL(raw) {
  if (!raw) return '';
  let base = String(raw).trim();
  // Remove trailing slash
  base = base.replace(/\/+$/, '');
  // If it already contains "/api" segment, keep as-is; otherwise append
  if (!/\/api(\/|$)/.test(base)) {
    base = base + '/api';
  }
  return base;
}

const baseURL = normalizeBaseURL(import.meta.env.VITE_API_BASE_URL || '');
const websiteName = import.meta.env.VITE_WEBSITE_NAME || 'Level';

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Website-Name': websiteName,
  },
  // Disable credentials by default to avoid CORS issues unless explicitly needed
  withCredentials: false,
});

client.interceptors.response.use(
  (res) => res,
  (error) => {
    // Normalize error messages
    const msg = error?.response?.data?.message || error?.message || 'Request failed';
    return Promise.reject(new Error(msg));
  }
);

export default client;
