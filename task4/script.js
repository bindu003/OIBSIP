function showLogin() {
    document.getElementById("register-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}

function showRegister() {
    document.getElementById("register-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
}

function showDashboard(username) {
    document.getElementById("register-box").style.display = "none";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("user-display").textContent = username;
}

function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists!");
        return;
    }

    localStorage.setItem(username, password);
    alert("Registration successful! Please login.");
    showLogin();
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedPassword = localStorage.getItem(username);

    if (!storedPassword) {
        alert("User not found!");
        return;
    }

    if (password !== storedPassword) {
        alert("Incorrect password!");
        return;
    }

    alert("Login successful!");
    showDashboard(username);
}

function logout() {
    alert("You have been logged out.");
    showLogin();
}
