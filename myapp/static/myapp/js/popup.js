// Show the modal after successful subscription
function showModal() {
    document.getElementById('thankYouModal').style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById('thankYouModal').style.display = "none";
}

// Prevent the form from reloading the page and show the modal instead
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.querySelector('input[name="email"]').value;

    // Optional: Make a POST request to save email in the backend (using AJAX)
    fetch("{% url 'newsletter_signup' %}", {
        method: 'POST',
        body: new URLSearchParams({
            'email': email,
            'csrfmiddlewaretoken': document.querySelector('[name=csrfmiddlewaretoken]').value
        })
    })
    .then(response => response.text())
    .then(data => {
        // Show the thank you modal after successful subscription
        showModal();
    })
    .catch(error => console.log('Error:', error));
});
