const fNameInput = document.querySelector('input[name="firstName"]');
const lNameInput = document.querySelector('input[name="lastName"]');
const phoneInput = document.querySelector('input[name="phoneNumber"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector(
  'input[name="confirmPassword"]'
);
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const formValidate = () => {
  const errorTxt = document.querySelector(".error");
  document
    .querySelectorAll("input")
    .forEach((e) => e.classList.remove("input__error"));
  errorTxt.innerHTML = "";
  if (fNameInput.value == "" || fNameInput.value.length <= 0) {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Fist Name can't be empty <br>     `;
    fNameInput.classList.add("input__error");
  }
  if (lNameInput.value == "" || lNameInput.value.length <= 0) {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Last Name can't be empty <br>     `;
    lNameInput.classList.add("input__error");
  }
  if (phoneInput.value.length <= 0) {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Phone Number can't be empty <br>     `;
    phoneInput.classList.add("input__error");
  } else if (!/^[0-9]+$/.test(phoneInput.value)) {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Phone Number must be only numbers <br>     `;
    phoneInput.classList.add("input__error");
  }
  if (emailInput.value == "") {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Email can't be empty <br>     `;
    emailInput.classList.add("input__error");
  } else if (emailInput.value.indexOf("@") < 1) {
    errorTxt.innerHTML = `${errorTxt.innerHTML} This is not a valid email <br>     `;
    emailInput.classList.add("input__error");
  }
  if (passwordInput.value == "") {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Password can't be empty <br>     `;
    passwordInput.classList.add("input__error");
  } else if (passwordInput.length < 8) {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Password must be at least 8 digits long <br>     `;
    passwordInput.classList.add("input__error");
  }
  if (confirmPasswordInput.value == "") {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Confirm password can't be empty <br>     `;
    confirmPasswordInput.classList.add("input__error");
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    errorTxt.innerHTML = `${errorTxt.innerHTML} Passwords don't match <br>     `;
    confirmPasswordInput.classList.add("input__error");
  }
};
