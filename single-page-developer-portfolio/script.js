// Initializing

// Contact Heading
const contactHeading = document.querySelector(".contact--heading");
console.log(contactHeading);

// Input fields
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

const inputFields = [inputName, inputEmail, inputMessage];

// Invalid Icons
const invalidIconName = document.getElementById("name--invalid-icon");
const invalidIconEmail = document.getElementById("email--invalid-icon");
const invalidIconMessage = document.getElementById("message--invalid-icon");

const invalidIcons = [invalidIconName, invalidIconEmail, invalidIconMessage];

// Invalid Text
const invalidTextName = document.getElementById("name--invalid-text");
const invalidTextEmail = document.getElementById("email--invalid-text");
const invalidTextMessage = document.getElementById("message--invalid-text");

const invalidTexts = [invalidTextName, invalidTextEmail, invalidTextMessage];

// form submit button
const btnSubmit = document.getElementById("btn-submit");

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Form Submission Event Listener - Click
btnSubmit.addEventListener("click", function (e) {
  // stops the form from submitting
  e.preventDefault();

  // error counter initialization
  let errorCounter = 0;

  // setting initial classes for invalid text, invalid icons, and input fields
  invalidIcons.forEach((icon) => icon.classList.add("opacity"));
  invalidTexts.forEach((text) => text.classList.add("opacity"));
  inputFields.forEach(function (inputField) {
    inputField.style.borderBottom = "0.1rem solid #ffffff";
  });

  // if email does not match the pattern, add 1 to the error count and set "invalid" css
  if (!inputEmail.value.match(pattern)) {
    errorCounter += 1;
    invalidIconEmail.classList.remove("opacity");

    invalidTextEmail.innerText = "Sorry, wrong format here";
    invalidTextEmail.classList.remove("opacity");

    inputEmail.style.borderBottom = "0.1rem solid #ff6f5b";
  }

  // if any field is blank, add 1 for each blank field and set their "invalid" css
  inputFields.forEach((inputField, index) => {
    if (inputField.value.length === 0) {
      errorCounter += 1;
      invalidIcons[index].classList.remove("opacity");

      invalidTexts[index].innerText = "Sorry, this field cannot be empty";
      invalidTexts[index].classList.remove("opacity");

      inputField.style.borderBottom = "0.1rem solid #ff6f5b";
    }
  });

  console.log(errorCounter);

  // if error count is 0, notify the user
  // NOTE: does not actually send the email, if you want that to happen, you might want to use either SMTP.js or Email.js - whose code will go here.
  if (errorCounter === 0) {
    // alert("message sent");
    contactHeading.innerText = "Thank You!";
    contactHeading.classList.add("zoom-in-out-box");
  }
});
