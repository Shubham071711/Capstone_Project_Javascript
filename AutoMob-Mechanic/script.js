// JavaScript to show confirmation message after booking form submission
document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (bookingForm && confirmationMessage) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            confirmationMessage.style.display = "block";
            bookingForm.reset();
        });
    }
});
