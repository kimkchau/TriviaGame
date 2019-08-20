var timer;

var game = {
    correct: 0,
    incorrect: 0,
    counter: 30,


    countdown: function () {
        game.counter--;
        $("#counter-number").html(game.counter);
        if (game.counter === 0) {
            console.log("TIME UP");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown, 30);

        $("#counter-wrapper").prepend(
            `<h2>Time Remaining: <span id='counter-number'>counter</span> Seconds</h2>`
        );

        $("#start").remove();
        $("#counter-wrapper").append("<button id='done' class='btn btn-light'>Done</button>");
    },

    done: function () {
        clearInterval(timer);
        $("#counter-wrapper").remove()
        $("#counter-wrapper").append("<h2>Time's Up!</h2>");

        if ($(".btn-dark").value === 1) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        this.result();
    },

    result: function () {
        clearInterval(timer);

        $("#counter-wrapper").remove();

        $("#counter-wrapper").append("<h2>All Done!</h2>");
        $("#counter-wrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#counter-wrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    }
};

$(document).on("click", "#start", function () {
    game.start();
    $('.carousel').carousel({
        interval: 1000,
        wrap: "false",
        pause: "false",
    })
});

$(document).on("click", "#done", function () {
    game.done();
});

// setTimeout(timeUp, 1000 * 20)

// function timeUp() {
//     // in the element with an id of time-left add an h2 saying Time's Up!
//     // console log done
//     console.log("done");
//     $("#time-left").append("<h2>Time's Up!</h2>");
//     console.log("time is up");
// }


