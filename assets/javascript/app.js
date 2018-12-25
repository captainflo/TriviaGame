var game = {
    correct: 0,
    wrong: 0,
    unanswered: 0,
    questions: {
        q1: "how many continents are there?",
        q2: "how many people are in the world?",
        q3: "When did Mario first appear?",
        q4: "How many presidents did America have?",
    },
    options: {
        o1: ["5","6","7","8"],
        o2: ["7.5 Billion", "8 Billion" ,"9 Billion", "10 Billion"],
        o3: ["1981","1986","1989","1990"],
        o4: ["41","42","43","44"], 
    },
    answers: {
        a1: "7",
        a2: "7.5 Billion",
        a3: "1981",
        a4: "43",
    }
}
var number = 30;
var intervalId;

// hide div
$(".result").hide();
$(".quiz").hide();
$("#show-number").hide();

// Start button
$("#start").on("click", function(){
    run();
    $(".quiz").show();
    $("#show-number").show();
    $("#start").hide();
})


// decrement timer function
function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        count();
        $("#time-left").text("Time Up Buddy !");
        $(".quiz").hide();
        $(".result").show();
        $(".correct").text("Correct: " +game.correct);
        $(".wrong").text("Wrong: " +game.wrong);
        $(".unanswered").text("Unanswered: " +game.unanswered);
    }
}
// run  timer function 
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
//  Stop timer function
function stop() {
clearInterval(intervalId);
}

// Appear questions and options
$(".question1").text(game.questions.q1);
for(i=0;i < game.options.o1.length; i++){
    var newspan = $('<input/>').attr({ type: 'radio',value: game.options.o1[i], name: "o1"});
    newspan.text(game.options.o1[i]);
    $(".option1").append(newspan);
    $(".option1").append(game.options.o1[i]);
}

$(".question2").text(game.questions.q2);
for(i=0;i < game.options.o2.length; i++){
    var newspan = $('<input/>').attr({ type: 'radio',value: game.options.o2[i], name: "o2"});
    newspan.text(game.options.o2[i]);
    $(".option2").append(newspan);
    $(".option2").append(game.options.o2[i]);
}

$(".question3").text(game.questions.q3);
for(i=0;i < game.options.o3.length; i++){
    var newspan = $('<input/>').attr({ type: 'radio',value: game.options.o3[i], name: "o3"});
    newspan.text(game.options.o3[i]);
    $(".option3").append(newspan);
    $(".option3").append(game.options.o3[i]);
}

$(".question4").text(game.questions.q4);
for(i=0;i < game.options.o4.length; i++){
    var newspan = $('<input/>').attr({ type: 'radio',value: game.options.o4[i], name: "o4"});
    newspan.text(game.options.o4[i]);
    $(".option4").append(newspan);
    $(".option4").append(game.options.o4[i]);
}

// function submit
$("#sub").on("click", function(){
    count();
    // Show Result
    stop();
    $(".quiz").hide();
    $(".result").show();
    $(".correct").text("Correct: " +game.correct);
    $(".wrong").text("Wrong: " +game.wrong);
    $(".unanswered").text("Unanswered: " +game.unanswered);
})

// function count answer per question 
function count(){
    game.correct = 0;
    game.wrong = 0;
    game.unanswered = 0;
    // question 1
    if ($('input:radio[name="o1"]:checked').val() === game.answers.a1) {
        game.correct++;
        console.log("this is correct! number:")
    }
    else if($('input:radio[name="o1"]:checked').val() === undefined){
        game.unanswered++;
        console.log("You put nothing...");
    }
    else{
        game.wrong++;
        console.log("this is wrong! number:");
    };

    // question 2
    if ($('input:radio[name="o2"]:checked').val() === game.answers.a2 ) {
        game.correct++;
        console.log("this is correct! number:")
    } 
    else if($('input:radio[name="o2"]:checked').val() === undefined){
        game.unanswered++;
        console.log("You put nothing...");
    }
    else{
        game.wrong++;
        console.log("this is wrong! number:");
    };

    // question 3
    if ($('input:radio[name="o3"]:checked').val() === game.answers.a3 ) {
        game.correct++;
        console.log("this is correct! number:")
    } 
    else if($('input:radio[name="o3"]:checked').val() === undefined){
        game.unanswered++;
        console.log("You put nothing...");
    }
    else{
        game.wrong++;
        console.log("this is wrong! number:");
    };
    
    // question 4
    if ($('input:radio[name="o4"]:checked').val() === game.answers.a4 ) {
        game.correct++;
        console.log("this is correct! number:")
    } 
    else if($('input:radio[name="o4"]:checked').val() === undefined){
        game.unanswered++;
        console.log("You put nothing...");
    }
    else{
        game.wrong++;
        console.log("this is wrong! number:");
    };
    }
