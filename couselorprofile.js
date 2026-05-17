const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// SIMPLE DATA SYSTEM
const data = {
    sarah: {
        name: "Sarah",
        img: "Emma Laui.jpg",
        tag: "#CAREER #LIFE"
    },

    marcus: {
        name: "Marcus",
        img: "MARTIN.jpg",
        tag: "#TECH #STARTUP"
    },

    elena: {
        name: "Elena",
        img: "jennie.jpg",
        tag: "#PSYCHOLOGY"
    },

    alex: {
        name: "Alex",
        img: "MINGI.jpg",
        tag: "#MOTIVATION #LIFE"
    },

    lisa: {
        name: "Lisa",
        img: "minji.jpg",
        tag: "#ANXIETY #THERAPY"
    },

    daniel: {
        name: "Daniel",
        img: "wonwoo.jpg",
        tag: "#TECH #STARTUP"
    },

    john: {
        name: "John",
        img: "mingyu.jpg",
        tag: "#CAREER #GROWTH"
    },

    sophia: {
        name: "Sophia",
        img: "nayeon.jpg",
        tag: "#RELATIONSHIP #HEALING"
    },

    aaron: {
        name: "Aaron",
        img: "YEONJUN.jpg",
        tag: "#MOTIVATION #LIFE"
    },

    emma: {
        name: "Emma",
        img: "Yunjin.jpg",
        tag: "#ANXIETY #THERAPY"
    }
};

// LOAD DATA
if (data[name]) {
    document.getElementById("profileName").innerText = data[name].name;
    document.getElementById("profileImg").src = data[name].img;
    document.getElementById("profileTag").innerText = data[name].tag;
}

function openChatFromProfile() {
    alert("Open chat with " + name);
}