// Create an empty array to store all tasks
const tasks = [];

// Load saved tasks from localStorage when the page opens
const saved = JSON.parse(localStorage.getItem('tasks'));
if (saved) {
    tasks.push(...saved); // Spread operator adds all saved tasks into the array
    displayTasks();       // Display them immediately
}

// Add event listener to the "Add Task" button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Add event listener to the "Clear All Tasks" button
document.getElementById('clearAllBtn').addEventListener('click', clearAllTasks);


// This function runs when the user clicks the Add Task button
function addTask() {
    const input = document.getElementById('taskInput'); // Get the input element
    const value = input.value.trim();                   // Remove extra spaces

    // If the input is empty, show an alert and stop the function
    if (!value) {
        alert('Please enter a task.');
        return;
    }

    tasks.push(value); // Add the new task to the array
    input.value = '';  // Clear the input field

    saveTasks();       // Save updated tasks to localStorage
    displayTasks();    // Refresh the displayed list
}


// This function updates the <ul> with all current tasks
function displayTasks() {
    const list = document.getElementById('taskList'); // Get the <ul> element
    list.innerHTML = '';                              // Clear the current list

    // Loop through each task in the array
    tasks.forEach((task, index) => {
        const li = document.createElement('li'); // Create a new <li> element
        li.textContent = task;                   // Set the text of the <li>

        // Mark as completed 
        li.addEventListener('click', () => {
            li.classList.toggle('completed'); // Toggle strike-through effect
        });

        // Edit task 
        const editBtn = document.createElement('button'); // Create edit button
        editBtn.textContent = 'Edit';                     // Button label

        editBtn.addEventListener('click', () => {
            const newText = prompt('Edit your task:', task); // Ask user for new text

            if (newText && newText.trim() !== '') {
                tasks[index] = newText.trim(); // Update the task in the array
                saveTasks();                   // Save updated tasks
                displayTasks();                // Refresh list
            }
        });

        // Remove button 
        const removeBtn = document.createElement('button'); // Create remove button
        removeBtn.textContent = 'Remove';                   // Button label

        removeBtn.addEventListener('click', () => {
            removeTask(index); // Remove task at this index
        });

        // Add both buttons to the <li>
        li.appendChild(editBtn);
        li.appendChild(removeBtn);

        // Add the <li> to the <ul>
        list.appendChild(li);
    });
}


// Function to remove a single task
function removeTask(index) {
    tasks.splice(index, 1); // Remove 1 item at the given index
    saveTasks();            // Save updated tasks
    displayTasks();         // Refresh list
}


// Clear all tasks 
function clearAllTasks() {
    tasks.length = 0; // Empty the array
    saveTasks();      // Save empty list
    displayTasks();   // Refresh list
}


// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Convert array to JSON
}
