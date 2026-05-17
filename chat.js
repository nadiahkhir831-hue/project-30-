const params = new URLSearchParams(window.location.search);
const user = params.get("user");

document.getElementById("chatUser").innerText =
"Chat with " + (user || "Counselor");

function sendMessage() {

    let input = document.getElementById("messageInput");
    let box = document.getElementById("chatBox");
    let typing = document.getElementById("typing");

    if (input.value.trim() !== "") {

        // USER MESSAGE
        let msg = document.createElement("div");
        msg.classList.add("my-message");

        msg.innerHTML = input.value + getTime();

        box.appendChild(msg);

        let userText = input.value;
        input.value = "";

        box.scrollTop = box.scrollHeight;

        // SHOW TYPING
        typing.style.display = "block";

        // AUTO REPLY
        setTimeout(() => {

            typing.style.display = "none";

            let reply = document.createElement("div");
            reply.classList.add("bot-message");

            reply.innerHTML = getReply(userText) + getTime();

            box.appendChild(reply);

            box.scrollTop = box.scrollHeight;

        }, 1500);
    }
}

/* AUTO REPLY */
function getReply(text) {

    let replies = [
        "I understand you 💙",
        "It’s okay, take your time 🌿",
        "I’m here for you 🤍",
        "That sounds really tough ☁️",
        "Would you like to share more?"
    ];

    return replies[Math.floor(Math.random() * replies.length)];
}

/* TIME */
function getTime() {

    let now = new Date();
    let time = now.getHours() + ":" +
    String(now.getMinutes()).padStart(2,'0');

    return `<div class="time">${time}</div>`;
}