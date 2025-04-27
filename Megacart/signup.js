document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirm-password").value.trim();

        const usernameRegex = /^.{6,10}$/;
        const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        const mobileRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!usernameRegex.test(username)) {
            alert("Username must be 6 to 10 characters.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email.");
            return;
        }

        if (!mobileRegex.test(mobile)) {
            alert("Mobile number must be exactly 10 digits.");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must include at least one letter, one digit, and one special character.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Store user data
        const user = {
            username,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("loggedInUser", username);
        alert("Sign-up successful!");
        location.href = "main.html";
    });
});
