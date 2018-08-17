$(function () {
    // PUT REQUEST:
    //this updates the state of the selected burger
    //from default "devoured: false" to "devoured: true"
    $(".devourBtn").on("click", function (event) {
        var burgerID = $(this).data("id");
        $.ajax("/api/burgers/" + burgerID, {
            type: "PUT",
            data: burgerID
        }).then(
            function () {
                //updates the DOM to reflect the content of the database
                location.reload();
            }
        );
    });
 
    // POST REQUEST:
    $("#addburger").on("click", function (event) {
        //here we prevent default so it doesn't submit something blank and mess up the page
        event.preventDefault();
        //this is the user input which we capture as an object so it can be reflected in the database
        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
        };
        //this ajax call creates the new burger in the database
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
             //updates the DOM to reflect the content of the database
            function () {
                location.reload();
            }
        );
    });
 });
 