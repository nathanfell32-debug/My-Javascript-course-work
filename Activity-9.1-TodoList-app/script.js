// select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

//function to add task
function addTask() {
    const taskText = taskInput.value;

    //check if input is not empty
    if (taskText) {
        const listItem = document.createElement('li');   //create a new list item
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const removeButton = document.createElement('button');   //create a remove button
        removeButton.textContent = 'Remove';

        removeButton.onclick = () => {    //remove button logic
            taskList.removeChild(listItem);
        };
 // build the list item
        listItem.appendChild(taskSpan);  
        listItem.appendChild(removeButton);
//add to the task list
        taskList.appendChild(listItem);
        //clear input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
// event listener for button
addTaskButton.addEventListener('click', addTask);