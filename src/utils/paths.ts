// Helper function to get correct image paths for GitHub Pages deployment
export const getImagePath = (path: string): string => {
  // In development, BASE_URL is '/', in production with GitHub Pages it's '/My-Portfolio/'
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
