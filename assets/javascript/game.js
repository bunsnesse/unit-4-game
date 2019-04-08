
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

    var image = ['https://www.thoughtco.com/thmb/TqQm3tRT4882EvcdDbqaogKDonI=/3609x2727/filters:fill(auto,1)/close-up-of-crystal-stone-glowing-in-darkroom-583919173-56f28e5d3df78ce5f83d7284.jpg',
     'https://i.ytimg.com/vi/Yx65_XZrcBU/maxresdefault.jpg',
     'https://cdn.shopify.com/s/files/1/0719/7981/products/1491254048_angel_aura_lemurian_seed_crystal_point_record_keeper___channeling_crystal_2000x.jpg',
     'http://cdn.shopify.com/s/files/1/0719/7981/products/8599_2F1477349037_2Flemurian_seed_crystal_pleiadian_starbrary_master_dow_600x.jpg?v=1477349317'];

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
            //     "background-image":"url('" + images[i] + "')",

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



