import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();
let signupBtn = document.getElementById("signupBtn");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");

signupBtn.addEventListener("click", () => {
  if (signupEmail.value.trim() && signupPassword.value.trim()) {
    createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        location.href = "signin.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  } else {
    console.log("Please enter your details.");
  }
});
