const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const ge = document.getElementById("ge");
const sr = document.getElementById("sr");
const check = document.getElementById("check");
const message = document.getElementById("message");
const toast = document.getElementById("toast");
const toastclose = document.getElementById("remove");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  let isValid = true;

  const fnamevalue = fname.value.trim();
  const lnamevalue = lname.value.trim();
  const emailvalue = email.value.trim();
  const messagevalue = message.value.trim();

  const queryseleted = ge.checked || sr.checked;
  const consentGiven = check.checked;

  if (fnamevalue === "") {
    setError(fname, "This feild is required");
    isValid = false;
  } else {
    clerError(fname);
  }

  if (lnamevalue === "") {
    setError(lname, "This feild is required");
    isValid = false;
  } else {
    clerError(lname);
  }

  if (emailvalue === "") {
    setError(email, "This feild is required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailvalue)) {
    setError(email, "Please enter valid email address");
    isValid = false;
  } else {
    clerError(email);
  }

  if (messagevalue === "") {
    setError(message, "This feild is required");
    isValid = false;
  } else {
    clerError(message);
  }

  if (!queryseleted) {
    const small = document.querySelector(".query-sec small");

    small.innerText = "This field is required";
    isValid = false;
  } else {
    const small = document.querySelector(".query-sec small");
    small.innerText = "";
  }

  if (!consentGiven) {
    const small = document.querySelector(".check-sec small");

    small.innerText = "To submit this form, please consent to be contacted";
    isValid = false;
  } else {
    const small = document.querySelector(".check-sec small");
    small.innerText = "";
  }

  if (isValid) {
    showtoast();
    form.reset();
  }
}

function setError(input, value) {
  const row = input.parentElement;
  const small = row.querySelector("small");

  small.innerText = value;

  row.classList.add("error");
}

function clerError(input) {
  const row = input.parentElement;
  const small = row.querySelector("small");

  small.innerText = "";

  row.classList.remove("error");
}

function showtoast() {
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

toastclose.addEventListener("click", () => {
  toast.classList.remove("show");
});
