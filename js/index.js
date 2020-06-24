var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var tbody = document.getElementsByTagName("tbody")[0].rows;
var correct1 = document.getElementById("correct1");
var correct2 = document.getElementById("correct2");
var correct3 = document.getElementById("correct3");
var select = document.getElementById("colors");
var para = document.querySelector("#change");

// console.log(answer1.innerText);
// console.log(tbody.length);
// console.log(tbody[2].getElementsByTagName("td")[3].innerHTML);

questions();
result();
generateText();

function questions() {
  var userAnswer1 = prompt(
    "Can you guess the first country with the most casses?"
  );
  var userAnswer2 = prompt(
    "Can you guess the second country with the most casses?"
  );
  var userAnswer3 = prompt(
    "Can you guess the third country with the most casses?"
  );
  var resultArr = validation(userAnswer1, userAnswer2, userAnswer3);
  console.log(resultArr);

  if (resultArr[0]) {
    answer1.innerText = userAnswer1;
  } else {
    answer1.innerText = "Bad Input";
  }

  if (resultArr[1]) {
    answer2.innerText = userAnswer2;
  } else {
    answer2.innerText = "Bad Input";
  }

  if (resultArr[2]) {
    answer3.innerText = userAnswer3;
  } else {
    answer3.innerText = "Bad Input";
  }
}

function changeColor() {
  var selectType = select.options[select.selectedIndex].value;
  console.log(selectType);
  para.style.color = selectType;
}

function result() {
  for (var i = 0; i < tbody.length; i++) {
    // var tdValue = tbody[i].getElementsByTagName("td")[3].innerHTML;
    var tdValue = tbody[i].cells[3].innerHTML;
    var tdText = tbody[i].cells[3].innerText;
    console.log(tdText);
    console.log(i);
    if (i == 0) {
      if (
        answer1.innerText.toLowerCase() === correct1.innerText.toLowerCase()
      ) {
        tbody[i].cells[3].innerText = "Correct Answer";
      } else {
        tbody[i].cells[3].innerText = "Wrong Answer";
      }
    } else if (i == 1) {
      if (
        answer2.innerText.toLowerCase() === correct2.innerText.toLowerCase()
      ) {
        tbody[i].cells[3].innerText = "Correct Answer";
      } else {
        tbody[i].cells[3].innerText = "Wrong Answer";
      }
    } else {
      if (
        answer3.innerText.toLowerCase() === correct3.innerText.toLowerCase()
      ) {
        tbody[i].cells[3].innerText = "Correct Answer";
      } else {
        tbody[i].cells[3].innerText = "Wrong Answer";
      }
    }
  }
}

// function text() {
//   var userInput = prompt("Enter A text That you want to repeate")
// }

function generateText() {
  var userInput = prompt("Enter A text That you want to be reapeatd");
  userInput = userInput + "  ";
  var repeatedNumber = prompt(
    "How Maby Time you want to repeate this text?\n Max is 5 times"
  );
  while (repeatedNumber > 5) {
    repeatedNumber = prompt("maximum number is 5 Please");
  }
  var selfpara = document.getElementById("self-generated");
  for (var i = 0; i < repeatedNumber; i++) {
    selfpara.innerText += userInput + "\xA0";
  }
  var finalResult = selfpara.innerText;
  selfpara.textContent =
    finalResult +
    " You Asked to Repeat " +
    " ( " +
    userInput +
    " ) " +
    repeatedNumber +
    " times ";

  // selfpara.innerText = `${finalResult} You Asked to Repeat ${userInput} ${repeatedNumber} Times`;
}

function validation(userAnswer1, userAnswer2, userAnswer3) {
  var Regix = /^[a-zA-Z]+$/;
  console.log(userAnswer1 + "/" + userAnswer2 + "/" + userAnswer3);
  var test1 = Regix.test(userAnswer1.trim());
  console.log(test1);
  var test2 = Regix.test(userAnswer2.trim());
  console.log(userAnswer2 + " " + userAnswer2);
  console.log(test2);
  var test3 = Regix.test(userAnswer3.trim());
  console.log(test3);
  return [test1, test2, test3];
}
