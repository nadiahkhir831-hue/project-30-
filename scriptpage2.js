$(document).ready(function () {

  function generateAnonymousUsername() {
    const adjectives = ["Cloud", "Silent", "Soft", "Hidden", "Calm", "Sky", "Misty", "Blue", "Dream", "Night"];
    const nouns = ["Whisper", "Soul", "Echo", "Mind", "Drift", "Wave", "Heart", "Star", "Flow", "Shadow"];

    let adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    let noun = nouns[Math.floor(Math.random() * nouns.length)];
    let number = Math.floor(Math.random() * 9999);

    return adj + noun + number;
  }

  $("#signupForm").submit(function (e) {
    e.preventDefault();

    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    let age = $("#age").val().trim();

    if (!email || !password || !age) {
      alert("Please fill in all fields before signing up!");
      return;
    }

    let username = generateAnonymousUsername();

    let user = {
      username: username,
      password: password,
      email: email,
      age: age
    };

    localStorage.setItem("cloudyUser", JSON.stringify(user));

    alert("Welcome " + username + "! Your account is created.");

    window.location.href = "login.html";
  });

});