$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devour = $(this).data("newDevour");

        var eatenOrNot = {
            devoured: devour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenOrNot
        }).then(
            function () {
                console.log("changed from not eaten to eaten", devour);
  
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
 
        event.preventDefault();

        var newBurger = {
            name: $("#burgs").val().trim(),
        };

       
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
             
                location.reload();
            }
        );
    });
})