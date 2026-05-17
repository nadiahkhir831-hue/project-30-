$(document).ready(function () {

    
    let savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        $("#profileUsername").text("@" + savedUsername);
    } else {
        $("#profileUsername").text("@CloudyUser");
    }

    
    $("#backBtn").click(function () {
        window.location.href = "welcomepage.html";
    });

   
    $("#logoutBtn").click(function () {
        localStorage.removeItem("username");
        alert("Logged out 👋");
        window.location.href = "login.html";
    });

});




function handleMenu(menu) {

    if (menu === "Daily Journal") {
        window.location.href = "dailyjournal.html";
    }

    else if (menu === "Daily Check-In") {
        window.location.href = "dailycheckin.html";
    }
}


/* =========================
   FAVORITE QUOTES PAGE
========================= */
function openFavoriteQuotes() {
    window.location.href = "saved.html";
}

const user = JSON.parse(localStorage.getItem("cloudyUser"));

if (user) {
    console.log("Username:", user.username);
    console.log("Email:", user.email);
}