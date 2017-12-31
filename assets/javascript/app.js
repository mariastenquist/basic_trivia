$(document).ready(function() {
  var index = 0;
  var countdownTimer = {
    time : 20,
    reset: function() {
      this.time = 20;
      $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);  
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
        countdownTimer.time--;
      if (countdownTimer.time >= 0) {
        $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
      }
      else {
        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
  };
var correct = 0;
var wrong = 0;
var q1 = {
  question : 'What is the longest street in America?',
  possibleAnswers : ['A. Mountain Avenue',
         'B. Lucky Lane',
         'C. Colfax Avenue',
         'D. Mile High Parkway'],
  flags : [false, false, true, false],
  answer : 'C. Colfax Avenue'
};

var q2 = {
  question: 'What step of the capitol building is exactly one mile high ASL?',
  possibleAnswers: ['A. 1st',
         'B. 13th',
         'C. 10th',
         'D. 46th'],
  flags : [false, true, false, false],
  answer : 'B. 13th'
};

var q3 = {
  question : 'What is the highest incorporated city in the US, sitting at 10430ft?',
  possibleAnswers : ['A. Aspen',
         'B. Leadville',
         'C. Montezuma',
         'D. Fairplay'],
  flags : [false, true, false, false],
  answer : 'B. Leadville'
};

var q4 = {
  question : 'What is the highest peak in the state of Colorado?',
  possibleAnswers : ['A. Mt Elbert',
         'B. Pikes Peak',
         'C. Mt Massive',
         'D. Mt Harvard'],
  flags : [true, false, false, false],
  answer : 'A. Mt Elbert'
};

var q5 = {
  question : 'What is the name of the highest suspension bridge in the world?',
  possibleAnswers : ['A. Fruita Bridge',
         'B. Royal Gorge Bridge',
         'C. Eagle River Bridge',
         'D. Prowers Bridge'],
  flags : [false, true, false, false],
  answer : 'B. Royal Gorge Bridge'
};

// var q6 = {
//   question : 'In what national park does the highest vertical cliff in Colorado exist?',
//   possibleAnswers : ['A. Black Canyon',
//          'B. Great Sand Dunes',
//          'C. Rocky Mountain',
//          'D. Mesa Verde'],
//   flags : [true, false, false, false],
//   answer : 'A. Black Canyon'
// };

// var q7 = {
//   question : "Eighty percent of the Colorado's water comes from what source?",
//   possibleAnswers : ['A. Mineral Springs',
//          'B. Rivers',
//          'C. Snow',
//          'D. Lakes'],
//   flags : [false, false, true, false],
//   answer : 'C. Snow'
// };

// var q8 = {
//   question : "What is Colorado's state nickname?",
//   possibleAnswers : ['A. Beehive State',
//          'B. Centennial State',
//          'C. Mining State',
//          'D. Colorful State'],
//   flags : [false, true, false, false],
//   answer : 'B. Centennial State'
// };

// var q9 = {
//   question : 'What is the state flower?',
//   possibleAnswers : ['A. Wildflower',
//          'B. Blue bells',
//          'C. Indian Paintbrush',
//          'D. Columbine'],
//   flags : [false, false, false, true],
//   answer : 'D. Columbine'
// };

// var q10 = {
//   question : "What Colorado city was known as 'the richest square mile on Earth'?",
//   possibleAnswers : ['A. Salida',
//           'B. Central City',
//           'C. Cripple Creek',
//           'D. Blackhawk'],
//   flags : [false, true, false, false],
//   answer : 'B. Central City'
// };

var questionArray = [q1, q2, q3, q4, q5];

function loadQuestion(questionSelection) {
  console.log(questionSelection);
  countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}

function setup() {
  index = 0;
  $('.startButton').on('click', function() {
    $(this).hide();
    countdownTimer.start();
    loadQuestion(index);
  });
}   

function getAnswer() {

  $('.answerchoice').on('click', function() {
    console.log('alert', index);
    index++;
    console.log('click', index);
    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    loadQuestion();
  })
}

function answerCorrect() {
  correct++;

  $(".alert").html('correct!!!');
}

function answerWrong() {
  wrong++;
  console.log("wrong");
  $(".alert").html('incorrect!!!');

}

function showScore() {
  $('.question').empty();
  $('.question').append("<h2><p>" + correct + " correct</p></h2>");
  $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
  countdownTimer.stop();
  $('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
  var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
  answerChosen = 'B';
 } else if (this.id == 'buttonC') {
  answerChosen = 'C';
 } else if (this.id == 'buttonD') {
  answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
  answerCorrect();
 } else if (answerChosen == 'A') {
  answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
  answerCorrect();
 } else if (answerChosen == 'B') {
  answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
  answerCorrect();
 } else if (answerChosen == 'C') {
  answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
  answerCorrect();
 } else if (answerChosen == 'D') {
  answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
  loadQuestion(index);
 } else {
  $(".answerchoice").hide();
  showScore();
 }
});

  $('.carousel.carousel-slider').carousel({fullWidth: true});

});