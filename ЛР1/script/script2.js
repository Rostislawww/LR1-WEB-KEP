var attempts = 0;
var maxAttempts = 11;
var a, b, c;
var d;
var correctAnswers = 0; 

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayNextTask() {
  if (attempts < maxAttempts) {
    a = getRandomInt(1, 10);
    b = getRandomInt(1, 10);
    c = parseInt(a * b);
    document.getElementById("task").innerHTML = a + ' * ' + b;
    document.getElementById("form").elements.answer.value = '';
    document.getElementById("answer").innerHTML = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("nextButton").disabled = true; 
  }
}

var next = document.getElementById("nextButton"); 

next.addEventListener('click', function () {
  displayNextTask();
  next.disabled = true;
});

displayNextTask();

var form = document.getElementById("form"); 

form.elements.pr.addEventListener('click', function () {
  if (attempts < maxAttempts) {
    d = c;
    var displayD = ' = ' + d;
    document.getElementById("task").innerHTML += displayD;
    document.getElementById("answer").innerHTML = 'Ваша відповідь: ' + form.elements.answer.value;
    if (parseInt(form.elements.answer.value) === c) {
      document.getElementById("result").innerHTML = 'Вірно';
      correctAnswers++;
    } else {
      document.getElementById("result").innerHTML = 'Не вірно';
    }
    attempts++;
    if (attempts === maxAttempts) {
      document.getElementById("task").innerHTML =
        'Загальний рахунок: ' +
        ((correctAnswers * 100) / maxAttempts) +
        '%' +
        ' (' +
        correctAnswers +
        ' правильних відповідей з 10)';
      document.getElementById("answer").innerHTML = '';
      document.getElementById("result").innerHTML = '';
    } else {
      next.disabled = false; 
   } 
  }
});
