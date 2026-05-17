let currentUser = "";

/* =========================
   OPEN CHAT
========================= */
function openChat(name){

    currentUser = name;

    const panel = document.getElementById("chatPanel");
    const body = document.getElementById("chatBody");

    panel.classList.add("active");

    document.getElementById("chatTitle").innerText =
        "Chat with " + name;

    body.innerHTML = `
        <div style="
            color:gray;
            margin-bottom:10px;
            text-align:center;
            padding-top:10px;
        ">
            Start chatting with ${name}...
        </div>
    `;

    body.scrollTop = body.scrollHeight;
}

/* =========================
   CLOSE CHAT
========================= */
function closeChat(){

    document.getElementById("chatPanel")
    .classList.remove("active");
}

/* =========================
   SEND MESSAGE
========================= */
function sendMsg(){

    let input = document.getElementById("msgInput");
    let msg = input.value.trim();

    if(msg === "") return;

    let chat = document.getElementById("chatBody");

    // USER MESSAGE
    chat.innerHTML += `
        <div style="
            text-align:right;
            margin:8px 0;
        ">
            <span style="
                background:#FF7EB3;
                color:white;
                padding:10px 14px;
                border-radius:15px;
                display:inline-block;
                max-width:75%;
            ">
                ${msg}
            </span>
        </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

    // AUTO REPLY
    setTimeout(() => {

        let reply = getAIReply(msg);

        chat.innerHTML += `
            <div style="
                text-align:left;
                margin:8px 0;
            ">
                <span style="
                    background:#F1F5F9;
                    color:#333;
                    padding:10px 14px;
                    border-radius:15px;
                    display:inline-block;
                    max-width:75%;
                ">
                    ${reply}
                </span>
            </div>
        `;

        chat.scrollTop = chat.scrollHeight;

    }, 700);
}

/* =========================
   ENTER KEY SEND
========================= */
document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("msgInput");

    input.addEventListener("keypress", function(e){

        if(e.key === "Enter"){
            sendMsg();
        }

    });

});

/* =========================
   AI COUNSELOR REPLY
========================= */
function getAIReply(msg){

    msg = msg.toLowerCase();

    // SARAH
    if(currentUser === "Sarah"){

        if(msg.includes("career")){
            return "You have strong potential in your career journey 🌸";
        }

        return "I'm here to support your life and career goals ✨";
    }

    // MARCUS
    if(currentUser === "Marcus"){

        if(msg.includes("tech")){
            return "Tech can feel overwhelming sometimes 🚀";
        }

        return "Tell me more about your startup or ideas 💡";
    }

    // ELENA
    if(currentUser === "Elena"){

        if(msg.includes("sad")){
            return "Your feelings matter 🤍 I'm listening.";
        }

        return "Mental health is important. Take your time 🌸";
    }

    // ALEX
    if(currentUser === "Alex"){

        return "Keep pushing forward 💪 You got this!";
    }

    // LISA
    if(currentUser === "Lisa"){

        if(msg.includes("anxious")){
            return "Try taking slow deep breaths 🌸";
        }

        return "You're safe here. Tell me what's on your mind.";
    }

    // DANIEL
    if(currentUser === "Daniel"){

        return "Healthy relationships need honesty and communication ❤️";
    }

    // JOHN
    if(currentUser === "John"){

        return "Growth starts outside your comfort zone 🚀";
    }

    // SOPHIA
    if(currentUser === "Sophia"){

        return "Healing takes time 🤍 Be gentle with yourself.";
    }

    // AARON
    if(currentUser === "Aaron"){

        return "Small progress is still progress ✨";
    }

    // EMMA
    if(currentUser === "Emma"){

        return "You are not alone 🌸 I'm here with you.";
    }

    return "I understand… tell me more about it.";
}

/* =========================
   FAVORITE BUTTON
========================= */
function toggleFav(btn){

    btn.classList.toggle("active");

    let icon = btn.querySelector("i");

    if(btn.classList.contains("active")){

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

    } else {

        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    }
}