

document.addEventListener('DOMContentLoaded', function() {
    var buttonOne = document.getElementById('buttonOne');
    buttonOne.addEventListener('click', function() {
      buttonOne.classList.toggle('gradient-active');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var buttonTwo = document.getElementById('buttonTwo');
    buttonTwo.addEventListener('click', function() {
      document.body.classList.toggle('gradient-active-whole-site');
    });
  });

  document.getElementById('buttonThree').addEventListener('click', function() {
    var weightInput = document.getElementById('weightInput').value;
    var heightInput = document.getElementById('heightInput').value;
    var resultElement = document.getElementById('result');

    // Convert input values to numbers
    var weight = parseFloat(weightInput);
    var height = parseFloat(heightInput);

    // Check if input values are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultElement.textContent = 'Ange giltiga värden för vikt och längd.';
    } else {
        // Convert height to meters (from centimeters)
        var heightInMeters = height / 100;

        // Calculate BMI
        var bmi = weight / (heightInMeters * heightInMeters);

        // Display the result
        resultElement.textContent = 'Ditt BMI är: ' + bmi.toFixed(2) + ",";

                   // Determine BMI category
                   var bmiCategory = '';
                   if (bmi < 18.5) {
                       bmiCategory = 'Undervikt.';
                   } else if (bmi >= 18.5 && bmi < 25) {
                       bmiCategory = 'Normalvikt.';
                   } else if (bmi >= 25 && bmi < 30) {
                       bmiCategory = 'Övervikt.';
                   } else {
                       bmiCategory = 'Fetma.';
                   }
       
                   // Display the BMI category
                   resultElement.textContent += ' din BMI-kategori är: ' + bmiCategory;
    }
});

document.addEventListener('DOMContentLoaded', function() {
  // Ditt befintliga JavaScript-kod här

  // Eventlyssnare för att konvertera °C till °F
  document.getElementById('buttonCelsiusToFahrenheit').addEventListener('click', function() {
    var celsiusInput = document.getElementById('celsiusInput').value;
    var temperatureResultElement = document.getElementById('celsiusToFahrenheit');

    var celsius = parseFloat(celsiusInput);

    if (isNaN(celsius)) {
      temperatureResultElement.textContent = 'Ange ett giltigt värde för °C.';
    } else {
      var convertedFahrenheit = (celsius * 9/5) + 32;
      temperatureResultElement.textContent = celsius + '°C motsvarar ' + convertedFahrenheit.toFixed(2) + '°F.';
    }
  });

  // Eventlyssnare för att konvertera °F till °C
  document.getElementById('buttonFahrenheitToCelsius').addEventListener('click', function() {
    var fahrenheitInput = document.getElementById('fahrenheitInput').value;
    var temperatureResultElement = document.getElementById('farenheitToCelsius');

    var fahrenheit = parseFloat(fahrenheitInput);

    if (isNaN(fahrenheit)) {
      temperatureResultElement.textContent = 'Ange ett giltigt värde för °F.';
    } else {
      var convertedCelsius = (fahrenheit - 32) * 5/9;
      temperatureResultElement.textContent = fahrenheit + '°F motsvarar ' + convertedCelsius.toFixed(2) + '°C.';
    }
  });
});

