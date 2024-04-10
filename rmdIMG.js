// Array of image URLs
var images = ["james.jpg", "kobe.jpg", "jordan.jpg"];

// Get the image element
var img = document.getElementById("randomImage");

// Display a random image from the array when the page loads
var randomIndex = Math.floor(Math.random() * images.length);
img.src = images[randomIndex];

// Change the image to a random one when clicked
img.addEventListener("click", function() {
    var newIndex;
    do {
        newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === randomIndex); // Ensure the new image is different from the current one
    img.src = images[newIndex];
    randomIndex = newIndex;
});