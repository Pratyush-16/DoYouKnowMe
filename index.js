
var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName + " do you know me!");

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Yes, You're right");
    score += 1;
  }
  else {
    console.log("Oh NO! This is wrong");
  }

  console.log("Current score is: ", score);
  console.log("--------------------------------");
}

//play("Where do I live ? ", "Ranchi");
//play("Where do I work ? ", "HCL");



//array of objects

var questions = [{
  question: "Where do I live ? \na.NewYork \nb.Toronto \nc.Sweden \nd.Ranchi \nEnter your answer : ",
  answer: 'd',
},
{
  question: "Where do I work ?\na.Google \nb.IBM \nc.HCL \nd.Accenture \nEnter your answer : ",
  answer: 'c',

},
{
  question: "Which sport I like ?\na.Cricket \nb.Football \nc.Baseball \nd.Badminton \nEnter your answer : ",
  answer: 'd',

},
{
  question: "What is my hobby ? \na.Singing \nb.Cooking \nc.PlayingGuitar \nd.Reading \nEnter your answer : ",
  answer: 'b',
},
{
  question: "What is my birthday month ?\na.February \nb.March \nc.December \nd.June \nEnter your answer : ",
  answer: 'a',
}, {
  question: "Q1.Which is my favourite superhero ? \na.superman \nb.batman \nc.ironman \nd.spiderman \nEnter your answer : ",
  answer: 'a'
},
{
  question: "Which is my favourite music genre ? \na.Indie \nb.Rock \nc.Metallica \nd.Pop \nEnter your answer : ",
  answer: 'a'
},
{
  question: "Q1.Which is my favourite cartoon character ? \na.Tom&Jerry \nb.Popeye \nc.Oswald \nd.RichieRIch \nEnter your answer : ",
  answer: 'a'
},
{
  question: "Q1.Which is my favourite marvel movie ? \na.Avengers:Infinity War \nb.Doctor Strange \nc.Ironman \nd.Captain America \nEnter your answer : ",
  answer: 'b'
},
{
  question: "Q1.What is my favourite dish  ? \na.:Chole-Bhature \nb.Rajma-Chawal \nc.Risotto \nd.Biryani \nEnter your answer : ",
  answer: 'b'
}
];

//loop

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("You scored: ", score);
