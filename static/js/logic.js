$(document).ready(function() {  
    //Initialize recipe card
    var currStep = "up and get cooking!";
    var currInstructions = "Say \"Alexa, tell Basil to start recipe.\"";
    // Watch for move to new step
    var tracker = new Firebase("https://projectbasil.firebaseio.com/test-user");
    // Get the current step index
    tracker.on("value", function(snapshot) {
    var userObject = snapshot.val();
    var command = userObject.command;
    var currStep = command.currentStep;

    var currInstructions = userObject.recipe["step" + currStep];

    console.log("Instructions: ", currInstructions);

    //Update recipe card
    document.getElementById('stepCounter').innerHTML = ("Step " + currStep);
    document.getElementById('instructions').innerHTML = (currInstructions);
    });

    $("#previousbtn").click(function() {
    console.log("hello");
    })
    
    $("#nextsbtn").click(function() {
    console.log("bye");
    })
});