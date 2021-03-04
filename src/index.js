// styles
import './scss/index.scss';

// generator function runtime - e.g. async / await enabler
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// bg & prod image
import { getBackgroundImage, getProductImage, getBbzImage } from './getbg';

// get favicon
import { getFavicon } from './getFavicon';

// validation
import { validateFields } from './validator';

// send data
import { sendDataToServer } from './sendData';

// cta animation
import { makeCtaGreatAgain } from './animateCta';

// popup functionality
import { getPopupFunctionalities } from './popupFunctionality';

// on page load
window.onload = () => {
  console.log('Back on track!');

  // load images
  getBackgroundImage();
  getProductImage();
  getBbzImage();

  // load favicon
  getFavicon();

  // apply validation events
  validateFields(true);

  // prepare data to be send to the server
  sendDataToServer();

  // animate CTA
  makeCtaGreatAgain();

  // popup functionality
  getPopupFunctionalities();
};
