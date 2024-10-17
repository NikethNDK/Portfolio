function openModal(element) {
    // Get the URL from the clicked item
    const url = element.getAttribute("data-url");
    
    // Set the iframe src to the URL
    document.getElementById("modalIframe").src = url;
    
    // Show the modal (you may need to use Bootstrap's modal methods)
    const modal = new bootstrap.Modal(document.getElementById('animatedModal'));
    modal.show();
}

// Close the modal and reset the iframe when the close button is clicked
document.getElementById('btn-close-modal').addEventListener('click', function() {
    const iframe = document.getElementById("modalIframe");
    iframe.src = ""; // Reset the iframe source
    const modal = bootstrap.Modal.getInstance(document.getElementById('animatedModal'));
    modal.hide(); // Hide the modal
});
