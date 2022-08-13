const form = document.getElementById("form-trial");

const activeError = (name, error, text, email = 0) => {
  const errors = document.getElementById(error);
  name.classList.add("active-error");
  name.style.borderColor = "hsl(0, 100%, 74%)";
  errors.innerHTML = text;

  if (email == 1) {
    name.style.color = "hsl(0, 100%, 74%)";
  }
};

const clear = (name, error) => {
  const errors = document.getElementById(error);
  name.classList.remove("active-error");
  name.style.borderColor = "hsl(246, 25%, 77%)";
  name.style.color = "#000";
  errors.innerHTML = "";
};

const verifyEmail = (email) => {
  const format = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!format.exec(email)) return true;
};

const verify = (e) => {
  e.preventDefault();
  const firtsname = document.getElementById("firtsname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("address");
  const password = document.getElementById("password");

  if (firtsname.value == "") {
    activeError(firtsname, "error-name", "First Name cannot be empty");
  } else {
    clear(firtsname, "error-name");
  }

  if (lastname.value == "") {
    activeError(lastname, "error-last", "Last Name cannot be empty");
  } else {
    clear(lastname, "error-last");
  }

  if (email.value == "") {
    activeError(email, "error-email", "Email address cannot be empty");
  } else if (verifyEmail(email.value)) {
    activeError(email, "error-email", "Looks like this is not an email", 1);
  } else {
    clear(email, "error-email");
  }

  if (password.value == "") {
    activeError(password, "error-password", "Password Name cannot be empty");
  } else {
    clear(password, "error-password");
  }
};

form.addEventListener("submit", verify);
