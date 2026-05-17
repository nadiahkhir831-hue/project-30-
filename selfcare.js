$(document).ready(function () {

    $("#postBtn").click(function () {

        let text = $("#postInput").val();

        if (text.trim() === "") return;

        let newPost = `
            <div class="post">
                <h3>Anonymous</h3>
                <p>${text}</p>
                <div class="actions">❤️ 0 • 💬 0</div>
            </div>
        `;

        $("#postList").prepend(newPost);
        $("#postInput").val("");
    });

});