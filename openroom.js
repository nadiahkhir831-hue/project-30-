/* =========================
   LOAD SAVED CHAT
========================= */

// bila page refresh chat lama masih ada
window.onload = function () {

    let savedChat = JSON.parse(localStorage.getItem("cloudyChat")) || [];

    savedChat.forEach(chat => {
        addMessage(chat.text, chat.type, false);
    });

};

/* =========================
   SEND MESSAGE
========================= */

function sendMsg() {

    let input = document.getElementById("msgInput");

    let msg = input.value.trim();

    if (msg === "") return;

    // USER MESSAGE
    addMessage(msg, "user", true);

    input.value = "";

    // AI REPLY
    setTimeout(() => {

        let reply = generateReply(msg);

        addMessage(reply, "ai", true);

    }, 700);
}

/* =========================
   ADD MESSAGE
========================= */

function addMessage(text, type, saveChat = true) {

    let chatBody = document.getElementById("chatBody");

    let div = document.createElement("div");

    div.classList.add("msg");

    div.classList.add(type === "user"
        ? "user-msg"
        : "ai-msg");

    // USER
    if (type === "user") {

        div.innerHTML = `
            <div class="user-name">You</div>
            <div>${text}</div>
        `;
    }

    // AI
    else {

        div.innerHTML = `

            <div class="ai-name">
                Counselor AI
            </div>

            <div class="ai-text">
                ${text}
            </div>

            <button class="save-btn">
                ❤️ Save
            </button>
        `;

        // SAVE QUOTE BUTTON
        let btn = div.querySelector(".save-btn");

        btn.addEventListener("click", function () {

            saveQuote(text);

        });
    }

    chatBody.appendChild(div);

    // AUTO SCROLL
    chatBody.scrollTop = chatBody.scrollHeight;

    // SAVE CHAT HISTORY
    if (saveChat) {

        let chats =
            JSON.parse(localStorage.getItem("cloudyChat"))
            || [];

        chats.push({
            text: text,
            type: type
        });

        localStorage.setItem(
            "cloudyChat",
            JSON.stringify(chats)
        );
    }
}

/* =========================
   SAVE FAVORITE QUOTES
========================= */

function saveQuote(text) {

    let quotes =
        JSON.parse(localStorage.getItem("quotes"))
        || [];

    // avoid duplicate
    if (!quotes.includes(text)) {

        quotes.push(text);

        localStorage.setItem(
            "quotes",
            JSON.stringify(quotes)
        );
    }

    alert("Saved to Favorite Quotes ❤️");
}

/* =========================
   AI REPLY SYSTEM
========================= */

function generateReply(msg) {

    msg = msg.toLowerCase();

    // HELLO
    if (
        msg.includes("hello") ||
        msg.includes("hi") ||
        msg.includes("hai")
    ) {

        const replies = [

            "Hey 😊 how are you feeling today?",

            "Hi there! What's on your mind?",

            "Hello 👋 I'm here for you.",

            "Heyyy 😊 tell me what's been bothering you lately?"
        ];

        return randomReply(replies);
    }

    // SAD
    if (msg.includes("sad")) {

        const replies = [

            "I'm really sorry you're feeling sad… want to talk about it?",

            "That sounds really heavy… what happened?",

            "It's okay to feel like this sometimes 🤍"
        ];

        return randomReply(replies);
    }

    // STRESS
    if (msg.includes("stress")) {

        const replies = [

            "That sounds stressful… what's been happening lately?",

            "You seem really overwhelmed 😔",

            "Stress can drain you a lot… are you okay?"
        ];

        return randomReply(replies);
    }

    // LOVE
    if (msg.includes("love")) {

        const replies = [

            "Love can be really complicated sometimes ❤️",

            "Relationships affect us deeply… what happened?",

            "Aww… want to tell me more about it?"
        ];

        return randomReply(replies);
    }

    // TIRED
    if (msg.includes("tired")) {

        const replies = [

            "You sound exhausted 😔",

            "Maybe your mind needs rest too.",

            "You've probably been carrying too much lately."
        ];

        return randomReply(replies);
    }

    // RANDOM HUMAN REPLIES
    const normalReplies = [

        "Hmm… tell me more about that.",

        "I understand… what happened after that?",

        "That sounds difficult honestly.",

        "I'm listening 👀",

        "Why do you think you feel that way?",

        "I get what you mean actually.",

        "That must've hurt a lot."
    ];

    return randomReply(normalReplies);
}

/* =========================
   RANDOM REPLY
========================= */

function randomReply(arr) {

    return arr[
        Math.floor(Math.random() * arr.length)
    ];
}

/* =========================
   NAVIGATION
========================= */

function goPage(page) {

    window.location.href = page;
}