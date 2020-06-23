var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
// console.log(answer1.innerText);

var userAnswer1 = prompt(
  "Can you guess the first country with the most casses?"
);
var userAnswer2 = prompt(
  "Can you guess the second country with the most casses?"
);
var userAnswer3 = prompt(
  "Can you guess the third country with the most casses?"
);

answer1.innerText = userAnswer1;
answer2.innerText = userAnswer2;
answer3.innerText = userAnswer3;
