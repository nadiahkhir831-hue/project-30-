$(document).ready(function(){

    // LOAD SAVED MOOD
    let savedMood =
    localStorage.getItem("dailyMood");

    if(savedMood){

        $("#resultBox").text(
        "Today's mood: " + savedMood
        );
    }

    // MOOD CLICK
    $(".mood").click(function(){

        $(".mood").removeClass("selected");

        $(this).addClass("selected");

        let mood =
        $(this).data("mood");

        localStorage.setItem(
        "dailyMood",
        mood
        );

        $("#resultBox").text(
        "Today's mood: " + mood
        );
    });

});