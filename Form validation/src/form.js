(() => {
  class Validator {
    isValid = false;

    constructor({ name, validator, error }) {
      this.name = name;
      this.validator = validator;
      this.error = error;
      this.errorElement = document.querySelector(`#${name}-error`);

      let element = document.querySelector(`[name='${name}']`);
      element.addEventListener("change", this.validate.bind(this));
    }

    setError() {
      this.errorElement.style.visibility = "visible";
      this.errorElement.textContent = this.error;
      this.isValid = false;
    }

    setValid() {
      this.errorElement.style.visibility = "hidden";
      this.isValid = true;
    }

    validate(event) {
      this.validator(event.target.value) ? this.setValid() : this.setError();
    }
  }

  var name = {
    name: "name",
    validator: (value) => value.match(/([A-Za-z]{5,} [A-Za-z]{5,})/),
    error:
      "Full name must have spacing and at least 5 characters for name and last name!",
  };

  var email = {
    name: "email",
    validator: (value) => value.match(/\w+@\w+.com/) && value.length < 50,
    error:
      "E-mail must have maximum 50 characters, and must contain '@' and '.com'!",
  };

  var date = {
    name: "date",
    validator: (value) =>
      Math.abs(
        new Date(Date.now() - new Date(value)).getUTCFullYear() - 1970
      ) >= 18,
    error: "You must be at least 18 years old!",
  };

  const nameValidator = new Validator(name);
  const emailValidator = new Validator(email);
  const dateValidator = new Validator(date);

  document.querySelector("[type='button']").addEventListener("click", () => {
    if (
      nameValidator.isValid &&
      emailValidator.isValid &&
      dateValidator.isValid
    ) {
      document.querySelector("[type='submit']").removeAttribute("disabled");
    }
  });
})();
