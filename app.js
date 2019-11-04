'use strict';

var userName = prompt('Hello! Thanks for visiting! What is your name?');
alert('Welcome to Ally\'s Lab Project, ' + userName + '!');

var correctAnswers = 0;


// first question
function containQ1() {
  var allyOrigin = prompt('Was I originally from Hawaii?');
  allyOrigin = allyOrigin.toLowerCase();
  // console.log('my origin', allyOrigin);

  if (allyOrigin === 'yes' || allyOrigin === 'y') {
  // console.log('Ding Ding Ding! You are correct!', allyOrigin);
    alert('Ding Ding Ding! You are correct!');
    correctAnswers++;
  } else if (allyOrigin === 'no' || allyOrigin === 'n') {
  // console.log('Wrong! I was from Oahu.', allyOrigin);
    alert('Wrong! I was from Oahu.');
  }
}
containQ1();

// Second question
function containQ2(){
  var allyPet = prompt('Do I have a cat?');
  allyPet = allyPet.toLowerCase();
  // console.log('no cat', allyPet);

  if (allyPet === 'yes' || allyPet === 'y') {
  // console.log('Wrong! I have a cute baby puppy named Mochiko!');
    alert('Wrong! I have a cute baby puppy named Mochiko!');
  } else if (allyPet === 'no' || allyPet === 'n') {
  // console.log('Yay! You\'re right. I have a crazy puppy named Mochi!');
    alert('Yay! You\'re right. I have a crazy puppy named Mochi!');
    correctAnswers++;
  }
}
containQ2();

// Third question
function containQ3() {
  var jobInterest = prompt('Did I want to be a hygienist?');
  jobInterest = jobInterest.toLowerCase();
  // console.log('job interest', jobInterest);

  if (jobInterest === 'yes' || jobInterest === 'y') {
  // console.log('Yep, I wanted to be one up until recently!');
    alert('Yep, I wanted to be one up until recently!');
    correctAnswers++;
  } else if (jobInterest === 'no' || jobInterest === 'n') {
  // console.log('Wrong, I actually did want to be one.');
    alert('Wrong, I actually did want to be one.');
  }
}
containQ3();

// Fourth question
function containQ4() {
  var allyMajor = prompt('Did I major in Psychology?');
  allyMajor = allyMajor.toLowerCase();
  // console.log('my major', allyMajor);

  if (allyMajor === 'yes' || allyMajor === 'y') {
  // console.log('Ding Ding Ding! Yep, my major was psychology. It was pretty fun.');
    alert('Ding Ding Ding! Yep, my major was psychology. It was pretty fun.');
    correctAnswers++;
  } else if (allyMajor === 'no' || allyMajor === 'n') {
  // console.log('Nope! psychology WAS my major.');
    alert('Nope! psychology WAS my major.');
  }
}
containQ4();


// Fifth question
function containQ5() {
  var allyMochi = prompt('Is mochi a food to me?');
  allyMochi = allyMochi.toLowerCase();
  // console.log('both answers correct', allyMochi)

  if (allyMochi === 'yes' || allyMochi === 'y') {
  // console.log('It is! You are correct! But I mostly think of my puppy when I hear Mochi.');
    alert('It is! You are correct! But I mostly think of my puppy when I hear Mochi.');
    correctAnswers++;
  } else if (allyMochi === 'no' || allyMochi === 'n') {
  // console.log('Kind of right! It is my puppy first to me, then a delicious snack. :)');
    alert('Kind of right! It is my puppy first to me, then a delicious snack. :)');
  }
}
containQ5();



// Sixth queston
function containQ6(){
  for (var i = 0; i < 4; i++) {
    var pickNumber = prompt('Pick a number from 1 - 10!');
    pickNumber = parseInt(pickNumber);
    // console.log('3', pickNumber);

    if (pickNumber > 3) {
    // console.log('Nope! Too high!');
      alert('Nope! Too high!');
    } else if (pickNumber < 3) {
    // console.log('Too low!');
      alert('Too low!');
    } else if (pickNumber === 3) {
    // console.log('You got it!');
      alert('You got it!'); 1;
      i = 5;
      correctAnswers++;
    }
  }
}
containQ6();

alert('Correct answer is 3!');

// Seventh question

var mochiQuestion = prompt('What are Mochi\'s favorite things?');
console.log(mochiQuestion);
mochiQuestion = mochiQuestion.toLowerCase();
var mochiList = ['ball', 'bone', 'bulbasaur', 'dog park', 'bully stick'];
console.log(mochiList);
var mochiGuess = 6;

while(mochiGuess > 0){
  for (var i = 0; i < mochiList.length; i++){
    if (mochiQuestion === mochiList[i]) {
      alert('Yep, you are right.');
      correctAnswers++;
      mochiGuess = 0;
    }
  }
  mochiGuess --;
  console.log(mochiQuestion);
  if (mochiGuess !== 0 && mochiGuess!== -1){
    mochiQuestion = prompt('Nope! Try again!');
  } else if (mochiGuess === 0) {
    alert('These are the correct answers: ball, bone, bulbasaur, dog park, bully stick');
  } else if (mochiGuess === -1){
    alert('Ding Ding Ding! These are all the correct answers: ball, bone, bulbasaur, dog park, bully stick');
  }
}

function math(){
  console.log(correctAnswers);
  var correct = correctAnswers;
  return correct;
}

alert('Well, ' + userName + '.' + 'You got ' + math() + ' correct!' + 'Well done!') 

alert('Please enjoy my project, ' + userName + '! Please let me know if there is something I missed or can improve on!');
