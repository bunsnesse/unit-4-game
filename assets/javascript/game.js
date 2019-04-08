
//PseudoCode:
//generated at begginging - 4 cystyals with numbers connected, a random number 
//click on crystals
//add crystals numbers to attempt to match to random number
// if = win, if > loss
//restart game and re-generate new numbers


var random_number;
var lost = 0;
var win = 0;
var previous = 0;

var StartGame = function () {

    $(".crystals").empty();

    var image = ['assets/images.amethyst.jpg',
     'assets/images.crystal.jpg',
     'assets/images.crystalline.jpg',
     'assets/images.quartz.jpg'];

    random_number = Math.floor(Math.random() * 102) + 19;

    $("#randomNumber").html('Random Result: ' + random_number);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random
            });

            // crystals.css({
            //     "background-image": image[i],

            // });

        $(".crystals").append(crystal);
        
    }
}

$("#previous").html("Total Score: " + previous);

StartGame();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > random_number) {

        lost++;

        $("#lost").html("Losses: " + lost);

        previous = 0;

        StartGame();
    }

    else if (previous === random_number) {

        win++;

        $("#win").html("Wins: " + win);

        previous = 0;

        StartGame();
    }
});



