export const makeCtaGreatAgain = () => {
  const animateCta = () => {
    const cta = document.getElementById('submit');
    let deg = 110;
    let first = -4;
    let second = 1;
    let third = 6;
    let fourth = 7;
    const cl1 = 'transparent';
    const cl2 = 'rgba(255, 166, 0, 0.8)';
    const intervalId = setInterval(() => {
      cta.style.backgroundImage = `linear-gradient(${deg}deg, ${cl1} ${first}%, ${cl2} ${second}%, ${cl2} ${third}%, ${cl1} ${fourth}%)`;
      first += 1;
      second += 1;
      third += 1;
      fourth += 1;
      if (first >= 100) clearInterval(intervalId);
    }, 17);
  };

  animateCta();

  setInterval(() => {
    animateCta();
  }, 5000);
};
