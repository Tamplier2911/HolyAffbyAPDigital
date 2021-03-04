import bgImg from './assets/jpg/bg-barilla.jpg';
import prodImg from './assets/png/img-barilla.png';
import bbaImg from './assets/png/BBA-Logo-500x500@075x.png';

export const getBackgroundImage = () => {
  // bg
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${bgImg})`;
};

const loadImage = (parent, image, alt) => {
  const wrapper = document.querySelector(`.${parent}`);
  const img = document.createElement('img');
  img.src = image;
  img.classList.add('img');
  img.alt = alt;
  wrapper.appendChild(img);
};

export const getProductImage = () => {
  // prod img
  loadImage('main__img--wrapper', prodImg, 'pasta deliziosa');
};

export const getBbzImage = () => {
  // bba img
  loadImage('advertise-img', bbaImg, 'BBAdds Logo');
};
