const IMAGE_BASE_URL =
  import.meta.env.VITE_IMAGE_BASE_URL || 'https://steve-amissi.be';

export const getImageUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return `${IMAGE_BASE_URL}${path.startsWith('/') ? path : '/' + path}`;
};

export const getProjectImageUrl = (imageName: string): string => {
  return getImageUrl(`/images/projects/${imageName}`);
};

export const getResponsiveImageUrls = (imageUrl: string) => {
  const extension = imageUrl.substring(imageUrl.lastIndexOf('.'));
  const baseName = imageUrl.substring(0, imageUrl.lastIndexOf('.'));

  return {
    mobile: `${baseName}-mobile${extension}`,
    thumb: `${baseName}-thumb${extension}`,
    full: imageUrl,
  };
};

export const getOptimizedImageSrcSet = (imageUrl: string): string => {
  const urls = getResponsiveImageUrls(imageUrl);
  return `
    ${urls.mobile} 400w,
    ${urls.thumb} 600w,
    ${urls.full} 1200w
  `.trim();
};
