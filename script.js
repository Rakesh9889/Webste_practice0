// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});
