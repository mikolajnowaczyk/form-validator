const FirstName = document.getElementById("inputName");
const Surname = document.getElementById("inputSurname");
const Email = document.getElementById("inputEmail");
const Password = document.getElementById("inputPassword");
const SubmitBtn = document.getElementsByName("btn-submit")[0];
const ErrorMessages = document.getElementsByClassName("error-message");
const Controls = [FirstName, Surname, Email, Password];

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const checkForm = (e) => {
  e.preventDefault();
  for (let i = 0; i < Controls.length; i++) {
    Controls[i].classList.remove(...Controls[i].classList);
    ErrorMessages[i].style.visibility = "hidden";
    if (!Controls[i].value) {
      Controls[i].classList.add("error-input");
      ErrorMessages[i].style.visibility = "visible";
    }
    //email simple validation
    if (i === 2 && !validateEmail(Controls[i].value)) {
      Controls[i].classList.add("error-input");
      ErrorMessages[i].style.visibility = "visible";
    }
  }
}

SubmitBtn.addEventListener("click", checkForm);