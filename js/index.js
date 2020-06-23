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

function changeColor() {
  var selectType = select.options[select.selectedIndex].value;
  console.log(selectType);
  para.style.color = selectType;
}

for (var i = 0; i < tbody.length; i++) {
  // var tdValue = tbody[i].getElementsByTagName("td")[3].innerHTML;
  var tdValue = tbody[i].cells[3].innerHTML;
  var tdText = tbody[i].cells[3].innerText;
  console.log(tdText);
  console.log(i);
  if (i == 0) {
    if (answer1.innerText === correct1.innerText) {
      tbody[i].cells[3].innerText = "Correct";
    } else {
      tbody[i].cells[3].innerText = "Wrong";
    }
  } else if (i == 1) {
    if (answer2.innerText === correct2.innerText) {
      tbody[i].cells[3].innerText = "Correct";
    } else {
      tbody[i].cells[3].innerText = "Wrong";
    }
  } else {
    if (answer3.innerText === correct3.innerText) {
      tbody[i].cells[3].innerText = "Correct";
    } else {
      tbody[i].cells[3].innerText = "Wrong";
    }
  }
}
