const logInBtn = document.querySelector(".log-in");
const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");

logInBtn.addEventListener("click", function (e) {
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;
  localStorage.setItem(usernameValue, passwordValue);
  
});
