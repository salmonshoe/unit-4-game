$(document).ready(function() {
//Create your global variables
var wins = 1;
var losses = 1;
    //Create a for loop to make it easier for the game's target number range
for(i = 19; i < 121; i++) {
    var hitNumber = [Math.floor(Math.random()*[i])];
};
    //Pull the id of the hit number so its value can be displayed in html
    $('#number-to-hit').text(hitNumber);

var counter = 0;

    //Create a variable that will select a random number from crystalValues.
    //*I know a for loop could've made this easier but I keep messing up on it*
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var selector = crystalValues[Math.floor(Math.random()*11)];

var reset = function() {
    counter = 0;
    hitNumber();
}

//data-crystal-value//grab the value by the attribute similar to the fridge activity

//When the User clicks on a crystal, points are added to the counter
$('.crystals').on('click', function () {
    counter += selector;
    $("#scoreboard").text(counter);
    
    //User wins once the counter equals the number to hit
    if (counter === hitNumber) {
        $("#wins").text(wins++);
        reset();
    }
    //User loses once the counter passes the hit number
    else if (counter >= hitNumber) {
        $("#losses").text(losses++);
        reset();
    }

   /* 
        I can't figure out how to generate different crystal values for each image. 
        They still increase by the same amount even if I separate by id.

        I regret hard coding it instead of creating images for a crystal iteration
        and adding data values that will give the images their own sepearte data values.

        One last thing, my reset function does not work properly which is frustrating.
                
    */
});

});
