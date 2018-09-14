$(document).ready(function () {


    var questions = [{
        ques: "Which MLB Team won the 2011 world series?",
        ans: ["St. Louis Cardinals", "New York Yankees", "Boston Redsox", "Kansas City Royals"],
        name: "Cardinals",
        correct: "St. Louis Cardinals",
        divClass: ".Cardinals",
    },

    {
        ques: "Who was the NL MVP in 2017?",
        ans: ["Joey Votto", "Paul Goldschmidt", "Giancarlo Stanton", "Nolan Arenado"],
        name: "Stanton",
        correct: "Giancarlo Stanton",
        divClass: ".Stanton",

    },
    {
        ques: "Who was the AL MVP IN 2017?",
        ans: ["Aaron Judge", "Jose Altuve", "Mike Trout", "Francisco Lindor"],
        name: "Altuve",
        correct: "Jose Altuve",
        divClass: ".Altuve",

    },
    {
        ques: "Which MLB team has the most World Series titles?",
        ans: ["Boston Redsox", "St. Louis Cardinals", "Pittsburg Pirates", "New York Yankees"],
        name: "Yankees",
        correct: "New York Yankees",
        divClass: ".Yankees"
    },
    {
        ques: "Which state has the most MLB teams?",
        ans: ["Texas", "Florida", "California", "New York"],
        name: "Cali",
        correct: "California",
        divClass: ".Cali",

    },
    {
        ques: "To win a World Series a team has to win best of _ games?",
        ans: ["7", "5", "9", "3"],
        name: "Seven",
        correct: "7",
        divClass: ".Seven",

    },

    ]


    var labels = ["first", "second", "third", "forth"];


    var startGame = $("#start-btn").on('click', function () {
        $(this).parent().hide();
        $('.container').show();
        countdown(30);
        questionDisplay();
    });


    var questionDisplay = function () {
        $(".questions :not('#sub-but')").empty();

        for (var x = 0; x < 6; x++) {
            $('.questions').prepend('<div class="' + questions[x].name + '"></div>');
            $(questions[x].divClass).append('<div class ="ques-title">' + questions[x].ques + '</div>');

            for (var i = 0; i <= 3; i++) {
                $(questions[x].divClass).append('<input type="radio"  name="' + questions[x].name + '" value="' + questions[x].ans[i] + '"/><label for="' + labels[i] + '">' + questions[x].ans[i] + '</label>');
            }
            $('.questions').prepend('<hr />');
        }
    }

    var countdown = function (seconds) {

        var timer = setInterval(function () {
            seconds = seconds - 1;
            $("#time-remain").html(seconds);

            if (seconds <= 0) {
                $('.container').fadeOut(500);
                var correctAnswers = 0;
                var wrongAnswers = 0;
                var unAnswered = 0;


                for (var i = 0; i < 6; i++) {

                    if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                        correctAnswers++;
                    }

                    else if ($('input:radio[name="' + questions[i].name + '"]:checked').val() != questions[i].correct) {
                        {

                            wrongAnswers++;
                        }
                    }
                    else {
                        unAnswered++;
                    }

                }
                $('#correctTimesUp').append(correctAnswers);

                $('#wrongTimesUp').append(wrongAnswers);
                $('#unansweredTimesUp').append(unAnswered);
                $('#timesUp').fadeIn(1000).show();


                clearInterval(timer);
                return;
            }
        }, 1000);


        $('#sub-but').on('click', function () {
            clearInterval(timer);
        })
    };



    var gradeQuiz = $('#sub-but').on('click', function () {

        var correctAnswers = 0;
        var wrongAnswers = 0;
        var unAnswered = 0;


        for (var i = 0; i < 6; i++) {

            if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                correctAnswers++;
            }

            else if ($('input:radio[name="' + questions[i].name + '"]:checked').val() != questions[i].correct) {
                {

                    wrongAnswers++;
                }
            }
            else {
                unAnswered++;
            }
        }
        console.log(unAnswered);

        countdown();

        $('.container').fadeOut(500);

        $('#answerScreen').show();

        $('#correctScreen').append(correctAnswers);

        $('#wrongScreen').append(wrongAnswers);

        $('#unanswered').append(unAnswered);
    });
    });
