var numbers = [
  ["### ", "# #", "# #", "# #", "###"],
  [" # ", " # ", " # ", " # ", " # "],
  ["### ", "  #", "###", "#  ", "###"],
  ["### ", "  #", "###", "  #", "###"],
  ["# # ", "# #", "###", "  #", "  #"],
  ["### ", "#  ", "###", "  #", "###"],
  ["### ", "#  ", "###", "# #", "###"],
  ["### ", "  #", "  #", "  #", "  #"],
  ["### ", "# #", "###", "# #", "###"],
  ["### ", "# #", "###", "  #", "###"],
];
var digitArray = [];
var numberCaptch = 0;
var amountNumbers = 3;

function startCaptcha() {
  var pixelContainer = document.querySelector(".captcha-digit");
  pixelContainer.innerHTML = "";

  for (var i = 0; i < amountNumbers; i++) {
      var digit = Math.floor(Math.random() * (10 - 0 + 0)) + 0;
      digitArray.push(digit);
      var numbersArray = numbers[digit];
      for (var j = 0; j < numbersArray[0].length; j++) {
          var row = document.createElement("div");
          row.className = "row";
          for (var k = 0; k < numbersArray.length; k++) {
              var pixel = document.createElement("div");
              pixel.className = "pixel";
              if (numbersArray[k][j] === "#") {
                  pixel.classList.add("red");
              }
              row.appendChild(pixel);
          }
          pixelContainer.appendChild(row);
      }
  }
  var numberString = digitArray.join("");
  numberCaptch = parseInt(numberString, 10);
}

function toggleButton() {
  var userInput = document.getElementById("user-input").value;
  var checkButton = document.getElementById("checkButton");
  if (userInput.trim() !== "") {
      checkButton.disabled = false;
  } else {
      checkButton.disabled = true;
  }
}

function checkCaptcha() {
  var userInput = document.getElementById("user-input").value;
  var digit = parseInt(userInput, 10);
  if (!isNaN(digit) && digit >= 0 && digit <= 999) {
      if (digit === numberCaptch) {
          alert("Капча була введена вірно");
          document.getElementById("user-input").value = "";
      } else {
          alert("Неправильно. Введіть правильне число.");
      }
  }
}
startCaptcha();