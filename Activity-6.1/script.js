// initialise an empty array
let array = [];

// function to display array
function displayArray() {
   const arrayContainer = document.getElementById('arrayElements');
   arrayContainer.innetHTML = '';  // clear previous content
   
   array.forEach((element, index) => {
    const elementDiv = document.createElement('div');
    elementDiv.textContent = 'element ${index + 1}: ${element}';
    arrayContainer.appendChild(elementDiv);
   });
}