$(document).ready(function () {

  // GET STARTED → pergi signup
  $("#btnGetStarted").click(function () {
    window.location.href = "signup.html";
    return false;
});

  // LOGIN LINK → pergi login
  $("#loginLink").click(function (e) {

    e.preventDefault();

    window.location.href = "login.html";

  });

  // OPTIONAL: check kalau user dah login
  let loggedIn = localStorage.getItem("cloud_loggedIn");

  if (loggedIn === "true") {
    console.log("User already logged in");
    // boleh auto redirect dashboard kalau nak:
    // window.location.href = "dashboard.html";
  }

});