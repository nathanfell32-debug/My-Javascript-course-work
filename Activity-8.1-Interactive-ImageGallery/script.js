// function to add images to the gallery 
function addImage() {
    const imageURL = document.getElementById('imageInput').value;
    if (imageURL) {     //conditional statement checking the input
        const gallery = document.getElementById('gallery');    //access the gallery element
        const galleryItem = document.createElement('div');     //create a new div for the gallery item
        gallery.classList.add('gallery-item');

        const img = document.createElement('img');   //create an image element
        img.src = imageURL;

        const removeButton = document.createElement('button');   //create a remove button
        removeButton.textContent = 'remove';
        removeButton.classList.add('remove-button');

    // assign onclick arrow function to remove the gallery item
        removeButton.onclick = () => {
            gallery.removeChild(galleryItem);
        };

        //append image and remove button to the gallery item
        galleryItem.appendChild(img);
        galleryItem.appendChild(removeButton);

        //append the gallery item to the gallery
        gallery.appendChild(galleryItem);
        
        //clear the input field
        document.getElementById('imageInput').value = '';
    } else {
        alert('please enter an image URL.');
    }
}
// add event listener to the add image button
document.getElementById('addImageButton').addEventListener('click', addImage);