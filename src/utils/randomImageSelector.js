/**
 * Random Image Selector
 *
 * @param {Array} images
 * @returns Object containing image url and image alt description
 */
export const randomImageSelector = (images) => {
  const image = images[Math.floor(Math.random() * images.length)];

  return { imageUrl: image.url, imageAlt: image.alt_description };
};
