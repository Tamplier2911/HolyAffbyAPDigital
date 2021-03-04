export const getPopupFunctionalities = () => {
  const modal = document.getElementById('modal');
  const allModals = Array.from(document.querySelectorAll('.modal__window'));

  modal.addEventListener('click', () => {
    allModals.forEach((modal) => {
      modal.style.display = 'none';
    });
    modal.style.display = 'none';
  });

  allModals.forEach((modal) => {
    modal.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  const popUp = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    modal.parentElement.style.display = 'flex';
  };

  const closeDown = (modalId) => {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    modal.parentElement.style.display = 'none';
  };

  const advertise = document.getElementById('advertise');
  const advertiseCloser = document.getElementById('advertise-closer');

  advertise.addEventListener('click', () => {
    popUp('advertise-modal');
  });
  advertiseCloser.addEventListener('click', () => {
    closeDown('advertise-modal');
  });

  const contatto = document.getElementById('contatto');
  const contattoCloser = document.getElementById('contatto-closer');

  contatto.addEventListener('click', () => {
    popUp('contatto-modal');
  });
  contattoCloser.addEventListener('click', () => {
    closeDown('contatto-modal');
  });

  const privacy = document.getElementById('privacy');
  const regolamento = document.getElementById('regolamento');
  const reglamentoCloser = document.getElementById('regolamento-closer');

  privacy.addEventListener('click', () => {
    popUp('regolamento-modal');
  });
  regolamento.addEventListener('click', () => {
    popUp('regolamento-modal');
  });
  reglamentoCloser.addEventListener('click', () => {
    closeDown('regolamento-modal');
  });
};
