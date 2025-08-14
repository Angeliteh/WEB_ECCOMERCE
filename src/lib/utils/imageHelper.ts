// Helper function to get correct image paths for GitHub Pages
export function getImagePath(imagePath: string): string {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In browser environment, use import.meta.env.BASE_URL
  if (typeof window !== 'undefined') {
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  }
  
  // For server-side rendering, construct the path
  const baseUrl = import.meta.env.BASE_URL || '/';
  return `${baseUrl}${cleanPath}`;
}
