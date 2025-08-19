const BASE_URL = 'https://programmaticseo.agency';

export const getCanonicalUrl = (path: string = '') => {
  // Remove leading slash if present, then add it back
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;
};