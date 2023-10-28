var correctcount = 0;
console.log("Script loaded (Quizcheck.js)")
function submitAnswers() {
  Check();
}


var x = document.getElementById("Rightsound");

function Check() {
  if (document.getElementById("answer1").checked && document.getElementById("answer2").checked) {
    alert("خطأ");
  } else if (document.getElementById("answer1").checked) {
    alert("صح");
    document.getElementById("Rightsound").play();
    Nextbutton.disabled = ''
  } else if (document.getElementById("answer2").checked) {
    alert("خطأ");
  }
  else{
    alert("خطأ");
  }
}

function submitAnswers2() {
  Check2();
}

function Check2() {
  if (document.getElementById("answer1").checked && document.getElementById("answer2").checked) {
    alert("خطأ");
  } else if (document.getElementById("answer2").checked) {
    alert("صح");
    document.getElementById("Rightsound").play();
    Nextbutton.disabled = ''
  } else if (document.getElementById("answer1").checked) {
    alert("خطأ");
  }
  else{
    alert("خطأ");
  }
}

function checkAnswers() {
  const correctAnswers = ['answer2', 'answer3', 'answer4', 'answer5'];
  let correctSelections = 0;
  let incorrectSelections = 0;

  const checkboxes = document.querySelectorAll('[id^="answer"]');

  checkboxes.forEach(checkbox => {
    if (checkbox.checked && correctAnswers.includes(checkbox.id)) {
      correctSelections++;
    } else if (checkbox.checked && (checkbox.id === 'answer1')) {
      incorrectSelections++;
    }
  });

  if (correctSelections === correctAnswers.length && incorrectSelections === 0) {
    alert("صح"); // All correct
    Nextbutton.disabled = ''
    document.getElementById("Rightsound").play();
  } else if (correctSelections > 0 && incorrectSelections === 0) {
    alert("صح ومازال يوجد إجابات أخري صحيحة"); // Partially correct
  } else {
    alert("خطأ"); // Incorrect
  }
}
