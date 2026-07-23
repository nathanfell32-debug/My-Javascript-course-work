// Toggle button
const toggleBtn = document.getElementById('toggleBtn');

// click event listener
toggleBtn.addEventListener('click', () => {
    // body element
    const body = document.body;

    // toggle between light and dark mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});