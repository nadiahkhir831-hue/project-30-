const quotes = [
    { text: "Be kind to your mind today.", author: "Cloud Wisdom" },
    { text: "One small step is still progress.", author: "Unknown" },
    { text: "You are doing better than you think.", author: "Cloud Wisdom" },
    { text: "Peace begins with a deep breath.", author: "Zen Guide" },
    { text: "Not every day is good, but there is good in every day.", author: "Unknown" },
    { text: "Your feelings are valid.", author: "Cloud Advice" },
    { text: "Healing takes time — be patient.", author: "Mind Notes" }
];

// stable daily index (same for all users on same day)
const today = new Date();
const seed = today.getFullYear() + today.getMonth() + today.getDate();
const index = seed % quotes.length;

const daily = quotes[index];

// inject into HTML
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dailyQuote").textContent = `"${daily.text}"`;
    document.getElementById("quoteAuthor").textContent = `— ${daily.author}`;
});