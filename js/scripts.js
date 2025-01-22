const artworks = document.querySelectorAll(".artwork");
let modal;

artworks.forEach((artwork) => {
    artwork.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent the click from bubbling to the document
        console.log("clicked");

        if (modal) {
            modal.remove();
        }

        modal = document.createElement("img");
        modal.classList.add("fullscreen");
        modal.src = event.target.src;
        console.log(modal.classList);
        document.body.appendChild(modal);
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
