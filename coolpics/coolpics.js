document.getElementById('menu-button').addEventListener('click', toggleMenu);

const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', viewHandler); // Add the event listener to each image
});


function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('hide');
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}" class="lg-img">
    </div>`;
}

function viewHandler(event) {

    // Create a variable to hold the element that was clicked on from event.target
    const clickedImage = event.target;

    // Get the src attribute from that element and 'split' it on the "-"
    const imageSrc = clickedImage.src; // Get the source of the clicked image
    console.log(imageSrc)
    const imageParts = imageSrc.split('-'); // Split the source string

    // Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newImageSrc = imageParts[0] + '-full.jpeg'; // Create the full image source

    // Create the viewer template
    const template = viewerTemplate(newImageSrc, "Enlarged Image")

    // Insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", template);

    // Add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}

// Function to close the viewer
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove(); // Remove the viewer from the DOM
    }
}