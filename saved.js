function loadQuotes() {
    let list = document.getElementById("quoteList");

    let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

    list.innerHTML = "";

    if (quotes.length === 0) {
        list.innerHTML = "<p style='text-align:center;color:#888'>No saved quotes yet.</p>";
        return;
    }

    quotes.forEach((q, index) => {
        let card = document.createElement("div");
        card.classList.add("quote-card");

        card.innerHTML = `
            <div class="quote-text">“${q}”</div>
            <button class="delete-btn" onclick="deleteQuote(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        list.appendChild(card);
    });
}

function deleteQuote(index) {
    let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

    quotes.splice(index, 1);

    localStorage.setItem("quotes", JSON.stringify(quotes));

    loadQuotes();
}

// auto load
loadQuotes();