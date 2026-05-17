$(document).ready(function(){

    // LOAD SAVED JOURNAL
    let savedJournal =
    localStorage.getItem("dailyJournal");

    if(savedJournal){

        $("#journalInput")
        .val(savedJournal);
    }

    // SAVE BUTTON
    $("#saveJournalBtn").click(function(){

        let text =
        $("#journalInput").val();

        localStorage.setItem(
        "dailyJournal",
        text
        );

        $("#savedText").text(
        "Journal Saved 💙"
        );
    });

});