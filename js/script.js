// Find the theme button and toggle the dark class when it is clicked.
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Handle the contact form without sending data to a server.
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("name").value.trim();
    formMessage.textContent = "Thank you, " + visitorName + "! Your form is complete.";
    contactForm.reset();
});
