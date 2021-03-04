import icon16 from './assets/png/favicon-16x16.png';
import icon32 from './assets/png/favicon-32x32.png';

export const getFavicon = () => {
  const head = document.querySelector('head');

  const link16 = document.createElement('link');
  link16.rel = 'icon';
  link16.type = 'image/png';
  link16.sizes = '16x16';
  link16.href = icon16;

  const link32 = document.createElement('link');
  link32.rel = 'icon';
  link32.type = 'image/png';
  link32.sizes = '32x32';
  link32.href = icon32;

  head.appendChild(link16);
  head.appendChild(link32);
};
