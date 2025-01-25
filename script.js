function convertUnit() {
    const unitFrom = document.getElementById('unitFrom').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let result = '';
  
    if (isNaN(inputValue)) {
      result = 'Please enter a valid number';
    } else {
      switch (unitFrom) {
        case 'length':
          result = `${inputValue} meters = ${inputValue * 100} centimeters`;
          break;
        case 'mass':
          result = `${inputValue} kilograms = ${inputValue * 1000} grams`;
          break;
        case 'temperature':
          result = `${inputValue}°C = ${(inputValue * 9/5) + 32}°F`;
          break;
        default:
          result = 'Invalid selection';
      }
    }
  
    document.getElementById('result').innerText = `Result: ${result}`;
  }
  