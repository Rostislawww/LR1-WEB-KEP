var attempts = 0;
var maxAttempts = 10;
var a, b, c;
var d = 0;
var radioButtons = document.querySelectorAll('input[type="radio"]')
var correctAnswers = 0; 

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function displayNextTask() {
  if (document.getElementById("answer").innerHTML=="Вірно"){
    attempts++;
    d++;
  }
  if (attempts < maxAttempts) {
    a = getRandomInt(1, 10);
    b = getRandomInt(1, 10);
    c = parseInt(a * b);
    document.getElementById("task").innerHTML = a + ' * ' + b;
    document.getElementById("form").elements.answer.value = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("nextButton").disabled = true; 
    var rightAnswer = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    for(i=0; i<4; i++){
      radioButtons[i].removeAttribute("disabled");
      radioButtons[i].checked=false
      if(i===rightAnswer){

        document.getElementById(`l${i}`).innerHTML= c
      }
      else{
        var t = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        if(t==c){
          t = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        }
        document.getElementById(`l${i}`).innerHTML=t        
      }
      radioButtons[i].addEventListener("click", function(event) {             
        var clickedRadioButton = event.target;             
        if (clickedRadioButton.checked) {                 
          if (clickedRadioButton.id == rightAnswer){                     
            document.getElementById('answer').innerHTML = "Вірно"   
            console.log(d)
            
          }                 
          else{                     
            document.getElementById('answer').innerHTML = "Не вірно";
      }
      
    }
    for (var j = 0; j < radioButtons.length; j++) {
      radioButtons[j].disabled = true;
    }
  })

    }
  }

  

  if (attempts === maxAttempts) {
    document.getElementById("nextButton").disabled = true;
    document.getElementById("task").innerHTML =
        'Загальний рахунок: ' +
        ((d * 100) / maxAttempts) +
        '%' +
        ' (' +
        d +
        ' правильних відповідей з 10)';
        
  } else {
    document.getElementById("nextButton").disabled = false;
  }
}
    

displayNextTask();

var next = document.getElementById("nextButton"); 

next.addEventListener('click', function () {
  displayNextTask();
  document.getElementById("answer").innerHTML=""
});
