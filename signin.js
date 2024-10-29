import { signInWithEmailAndPassword, auth } from "./firebase.js";

let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");
let signinBtn = document.getElementById("signinBtn");

signinBtn.addEventListener("click", () => {
  if (signinEmail.value.trim() && signinPassword.value.trim()) {
    signInWithEmailAndPassword(auth, signinEmail.value, signinPassword.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        location.href = "dashboard.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  } else {
    console.log("Please enter your details.");
  }
});
