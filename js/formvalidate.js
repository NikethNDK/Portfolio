// Function to validate the name field
function validateName(name) {
    const namePattern = /^[a-zA-Z]+$/;
    return namePattern.test(name);
}

// Get the form and the first name input field
const form = document.getElementById('contact-form');
const firstName = document.getElementById('fname');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    
    if (!validateName(firstName.value)) {
        // Set a custom validation message
        firstName.setCustomValidity("First Name should only contain letters.");
        firstName.reportValidity(); // Display the validation message
        event.preventDefault(); // Prevent the form from submitting
    } else {
        // Clear any previous validation message if the input is valid
        firstName.setCustomValidity("");
    }
});
