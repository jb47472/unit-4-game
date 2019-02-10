var randomResult;
var lost = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQippCHDqN9kK9ViFLJFy8wBnsESl8ATSDI__B-Wsj0rM0XRh1VDg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAUZb9Mw5JeYAhufH9SnRO74nlQNIRnKF84BNYVloijvIWwxD4g",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfxXidBEjy8Uz_wa6NFo98ozBfazAGWhp1oB7A-efj0B6smnj",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3mSQQ_N1kzyoxy5E5Rhj2WQu6kd2PSmE72if0x-JqpiDKqketg",
    ];

    randomResult = Math.floor(Math.random() * 120) + 19;

    $("#result").html("Click on the Crystals to Guess This Number.--   " + randomResult + "--   Each Crystal has Neen Assigned a Random Number.  Win the Game by Matching Your Total Score to the Random Number. A Total Score That is Above the Random Number Will Lose the Game. ");
    

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        crystal.css({
            "backround-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);

}

resetAndStart();

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);
    console.log(previous);

    if (previous > randomResult) {
        lost++;

        $("#lost").html("You lost: " + lost);

        previous = 0;

        resetAndStart();
    }
    else if (previous === randomResult) {
        win++;

        $("#win").html("You win: " + win);

        previous = 0;


        resetAndStart();
    }


});