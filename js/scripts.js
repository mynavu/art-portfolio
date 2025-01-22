const artworks = document.querySelectorAll(".artwork");
let modal; // Declare the modal variable in a broader scope

artworks.forEach((artwork) => {
    artwork.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from bubbling to the document
        console.log("clicked");

        // Remove any existing modal before creating a new one
        if (modal) {
            modal.remove();
        }

        // Create the modal and set its properties
        modal = document.createElement("img");
        modal.classList.add("fullscreen");
        modal.src = event.target.src;
        console.log(modal.classList);
        document.body.appendChild(modal); // Append modal to the body
        console.log(document.body.contains(modal)); // Should log true
    });
});

document.addEventListener("click", (event) => {
    // Check if the modal exists and ensure the click is not on the modal
    if (modal && event.target !== modal) {
        modal.remove();
        modal = null; // Reset modal to avoid stale references
    }
});
