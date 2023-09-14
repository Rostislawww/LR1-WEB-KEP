var fahrenheitInput = document.getElementById('fahrenheit');
var celsiusInput = document.getElementById('celsius');

fahrenheitInput.addEventListener('input', function() {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) / 1.8; 
    celsiusInput.value = celsius.toFixed(2);
});

celsiusInput.addEventListener('input', function() {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 1.8) + 32; 
    fahrenheitInput.value = fahrenheit.toFixed(2);
});
