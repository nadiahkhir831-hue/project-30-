$(document).ready(function() {
    // Post Action
    $('#postBtn').on('click', function() {
        const question = $('#questionInput').val();
        const category = $('#categorySelect').val();
        const isAnonymous = $('#anonToggle').is(':checked');

        if (question.trim() === "") {
            alert("Please enter a question.");
            return;
        }

        console.log("Data Sent:", {
            content: question,
            category: category,
            anonymous: isAnonymous
        });

        alert("Question posted successfully!");
        $('#questionInput').val('');
    });

    // Close/Clear Action
    $('#closeBtn').click(function() {
        if(confirm("Discard message?")) {
            $('#questionInput').val('');
        }
    });
});