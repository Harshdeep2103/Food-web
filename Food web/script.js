
// Get modal, cart icon, and close button
const modal = document.getElementById('cartModal');
const cartIcon = document.getElementById('cartIcon');
const closeModal = document.getElementById('closeModal');
const backToMenuBtn = document.getElementById('backToMenuBtn');

// Open the modal when the cart icon is clicked
cartIcon.onclick = function () {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";  // Disable scroll when modal is open
}

// Close the modal when the "X" (close button) is clicked
closeModal.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";  // Enable scroll when modal is closed
}

// Close the modal when the "Back to Menu" button is clicked
backToMenuBtn.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";  // Enable scroll when modal is closed
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";  // Enable scroll when modal is closed
    }
}
// Get modal, request dish button, and close buttons
const requestDishModal = document.getElementById('requestDishModal');
const requestDishBtn = document.getElementById('requestDishBtn');
const closeRequestModal = document.getElementById('closeRequestModal');
const cancelRequestBtn = document.getElementById('cancelRequestBtn');
const submitRequestBtn = document.getElementById('submitRequestBtn');

// Open the modal when "Request Dish" button is clicked
requestDishBtn.onclick = function () {
    requestDishModal.style.display = "block";
    document.body.style.overflow = "hidden";  // Disable scroll when modal is open
}

// Close the modal when the "X" (close button) is clicked
closeRequestModal.onclick = function () {
    requestDishModal.style.display = "none";
    document.body.style.overflow = "auto";  // Enable scroll when modal is closed
}

// Close the modal when the "Cancel" button is clicked
cancelRequestBtn.onclick = function () {
    requestDishModal.style.display = "none";
    document.body.style.overflow = "auto";  // Enable scroll when modal is closed
}

// Close the modal when the "Submit Request" button is clicked
submitRequestBtn.onclick = function () {
    requestDishModal.style.display = "none";
    document.body.style.overflow = "auto";  // Enable scroll when modal is closed
}

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
    if (event.target == requestDishModal) {
        requestDishModal.style.display = "none";
        document.body.style.overflow = "auto";  // Enable scroll when modal is closed
    }
}

