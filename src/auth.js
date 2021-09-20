import { auth } from "./config.js";

document.getElementById("button").onclick = googleLogin;
document.getElementById("signout").onclick = signout;

function signout() {
  auth()
    .signOut()
    .then(function () {
      console.log("signedOut");
    });
}

function googleLogin() {
  var provider = new auth.GoogleAuthProvider();

  auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      //
      document.body.append(`Signed in as: ${user.displayName}`);
      console.log(`Signed in as: ${user.displayName}`);
    })
    .catch(function (error) {
      console.log(error);
    });
}