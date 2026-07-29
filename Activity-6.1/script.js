// initialise an empty array
let array = [];

// function to display array
function displayArray() {
   const arrayContainer = document.getElementById('arrayElements');
   arrayContainer.innerHTML = '';  // clear previous content
   
   array.forEach((element, index) => {
    const elementDiv = document.createElement('div');
    elementDiv.textContent = `element ${index + 1}: ${element}`;
    arrayContainer.appendChild(elementDiv);
   });
}

// function to add element to the end of the array
function addElement() {
    const elementInput = document.getElementById('elementInput').value.trim();
    if (elementInput !== '') {
        array.push(elementInput);
        displayArray();
    } else {
        alert('Please enter a valid element.');
    }
}

 // function to remove element from the beginning or end of the array
 function removeElement(type) {
    if (array.length === 0) {     // prevents removing from an empty array
        alert('Array is empty.');
        return;
    }


    // decides which removal method to use
    switch (type) {
        case 'first':
        array.shift();   //removes first element
        break;
        case 'last':
        array.pop();   //removes last element
        break;
        default:
            alert('Invalid operation.');
    }


    // re-render the updated array
    displayArray();
    }