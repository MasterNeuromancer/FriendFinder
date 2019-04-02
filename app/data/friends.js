$(".submit").on("click", function (event) {
    event.preventDefault();

    // Here we grab the form elements
    var newProfile = {
        Name: $("#name").val().trim(),
        photo: $("#photolink").val().trim(),
        $(".custom-select").val().trim(),
    };

    console.log(newProfile);

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    $.post("/api/survey", newProfile,
        function (data) {

            // If a table is available... tell user they are booked.
            if (data) {
                alert("Yay! You are now on FriendFinder");
            }

            // If a table is available... tell user they on the waiting list.
            else {
                alert("Sorry you are on the wait list");
            }

            // Clear the form when submitting
            $("#name").val("");
            $("#photolink").val("");
            $(".custom-select").val("");

        });

});