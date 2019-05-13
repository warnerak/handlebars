$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");

        var newDevouredState = {
            devoured: 1
        };

        $.ajax("/api/tacos/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to 1");
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newTaco = {
            taco_name: $("#ca").val().trim(),
            devoured: 0
        };
        console.log(newTaco);

        $.ajax("/api/tacos", {
            type: "POST",
            data: newTaco
        }).then(
            function () {
                console.log("created new taco");

                location.reload();
            }
        );
    });
});
