document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    if (!username || !password) {
        alert("Both fields are mandatory.");
        return;
    }
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.username === username && savedUser.password === password) {
        localStorage.setItem('loggedInUser', JSON.stringify(username));
        location.href = 'main.html';
    } else {
        alert('Please enter valid username and password');
    }
});
