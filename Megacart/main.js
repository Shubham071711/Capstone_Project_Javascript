document.addEventListener("DOMContentLoaded", function () {
    const logoutLink = document.getElementById("logout");
    const dateSpan = document.getElementById("current-date");
    const welcomeMsg = document.getElementById("welcome-msg");
    const viewCartBtn = document.getElementById("view-cart");

    // Set current date
    const date = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    dateSpan.textContent = formattedDate;

    // Welcome message
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        welcomeMsg.textContent = `Dear, ${loggedInUser}! Welcome to Mega Cart ...`;
    }

    // Logout
    logoutLink.addEventListener("click", function () {
        localStorage.clear();
        sessionStorage.clear();
        location.href = "login.html";
    });

    // Handle item click
    const itemImages = document.querySelectorAll("img[data-name]");
    itemImages.forEach((img) => {
        img.addEventListener("click", function () {
            const name = img.getAttribute("data-name");
            const image = img.getAttribute("src");
            const cost = parseFloat(img.getAttribute("data-cost"));
            const days = img.getAttribute("data-days");

            const item = {
                name,
                image,
                cost,
                days
            };

            let items = JSON.parse(localStorage.getItem("items")) || [];
            items.push(item);
            localStorage.setItem("items", JSON.stringify(items));

            alert(`${name} has been added to your cart.`);
        });
    });

    // View cart
    viewCartBtn.addEventListener("click", function () {
        location.href = "buy-item.html";
    });
});
