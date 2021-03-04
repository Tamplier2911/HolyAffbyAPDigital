import { validateFields } from './validator';

export const sendDataToServer = () => {
  const submit = document.getElementById('submit');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const errors = validateFields(false);

    if (errors === 0) {
      // send data
      const inputFields = Array.from(document.querySelectorAll('input'));
      const data = {};
      inputFields.forEach((field) => {
        data[field.name] = field.value;
        field.value = '';
      });

      // implement http request here

      console.log('Following data has been sent.');
      console.log(data);
    } else {
      // do not send data
      console.log(`${errors} occurred during data validation.`);
      return;
    }
  });
};
