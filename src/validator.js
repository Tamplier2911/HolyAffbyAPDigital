export const validateFields = (bool) => {
  const inputFields = Array.from(document.querySelectorAll('input'));

  let day = '';
  let month = '';
  let year = '';

  const calculateAge = (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const validateAge = (day, month, year, field, errorField) => {
    if (day && month && year) {
      const age = calculateAge(new Date(`${month}/${day}/${year}`));
      if (age >= 18) {
        errorField.style.display = 'none';
        field.setCustomValidity('');
      } else {
        errorField.textContent = 'I minori di 18 anni non possono participare!';
        errorField.style.display = 'block';
        field.setCustomValidity('Invalid field.');
      }
    } else return;
  };

  const validate = (field, id) => {
    const value = field.value;
    const errorField =
      id === 'giorno' || id === 'mese' || id === 'anno'
        ? document.getElementById(`error-age`)
        : document.getElementById(`error-${id}`);

    switch (id) {
      case 'name':
        if (value.length > 0 && /\d/.test(value) === false) {
          errorField.style.display = 'none';
          field.setCustomValidity('');
          return 0;
        } else {
          errorField.textContent = 'completa correttamente il campo: nome';
          errorField.style.display = 'block';
          field.setCustomValidity('Invalid field.');
          return 1;
        }

      case 'cognome':
        if (value.length > 0 && /\d/.test(value) === false) {
          errorField.style.display = 'none';
          field.setCustomValidity('');
          return 0;
        } else {
          errorField.textContent = 'completa correttamente il campo: cognome';
          errorField.style.display = 'block';
          field.setCustomValidity('Invalid field.');
          return 1;
        }

      case 'email':
        if (
          value.length > 0 &&
          /(.+)@(.+){2,}\.(.+){2,}/.test(value) === true
        ) {
          errorField.style.display = 'none';
          field.setCustomValidity('');
          return 0;
        } else {
          errorField.textContent = 'completa correttamente il campo: email';
          errorField.style.display = 'block';
          field.setCustomValidity('Invalid field.');
          return 1;
        }

      case 'giorno':
        if (id === 'giorno' && value <= 31 && value >= 1) {
          errorField.style.display = 'none';
          field.setCustomValidity('');
          value.length === 1 ? (day = `0${value}`) : (day = value);
          validateAge(day, month, year, field, errorField);
          return 0;
        } else {
          errorField.textContent = 'hai inserito la data sbagliata';
          errorField.style.display = 'block';
          field.setCustomValidity('Invalid field.');
          return 1;
        }

      case 'mese':
        if (id === 'mese' && value <= 12 && value >= 1) {
          errorField.style.display = 'none';
          field.setCustomValidity('');
          value.length === 1 ? (month = `0${value}`) : (month = value);
          validateAge(day, month, year, field, errorField);
          return 0;
        } else {
          errorField.textContent = 'hai inserito la data sbagliata';
          errorField.style.display = 'block';
          field.setCustomValidity('Invalid field.');
          return 1;
        }

      case 'anno':
        if (id === 'anno' && value.length === 4) {
          errorField.style.display = 'none';
          field.setCustomValidity('');
          year = value;
          validateAge(day, month, year, field, errorField);
          return 0;
        } else {
          errorField.textContent = 'hai inserito la data sbagliata';
          errorField.style.display = 'block';
          field.setCustomValidity('Invalid field.');
          return 1;
        }

      default:
        return 0;
    }
  };

  if (bool) {
    inputFields.forEach((field) => {
      const id = field.id;
      field.addEventListener('blur', (e) => validate(field, id));
    });
  } else {
    let errors = 0;
    inputFields.forEach((field) => {
      const id = field.id;
      errors += validate(field, id);
    });
    return errors;
  }
};
