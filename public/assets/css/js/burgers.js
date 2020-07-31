$(function() {
    $(".uneaten-burger").on("click", function(event) {
        var id =$(this).data("id");
        var newDevoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        
    })
})