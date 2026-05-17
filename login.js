
// AUTO FILL USERNAME
window.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(localStorage.getItem("cloudyUser"));

    if (user && user.username) {
        document.getElementById("usernameInput").value = user.username;
    }

    // LOGIN BUTTON EVENT (pastikan DOM ready)
    document.getElementById("loginSubmit").addEventListener("click", function () {

        const username = document.getElementById("usernameInput").value.trim();
        const password = document.getElementById("passInput").value.trim();

        if (!username || !password) {
            alert("Please enter username and password");
            return;
        }

        const user = JSON.parse(localStorage.getItem("cloudyUser"));

        if (!user) {
            alert("No account found. Please sign up first.");
            return;
        }

        if (username !== user.username) {
            alert("Username not match");
            return;
        }

        if (password !== user.password) {
            alert("Wrong password");
            return;
        }

        alert("Welcome " + user.username);

        // ✔ REDIRECT TO WELCOME PAGE
        window.location.href = "welcomepage.html";
    });
});   