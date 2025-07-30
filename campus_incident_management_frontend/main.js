// For login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form data
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Simulate successful login (you can implement your backend logic here)
  if (email && password) {
      // Display success message
      document.getElementById("loginSuccessMessage").textContent = "Login Successful!";
      document.getElementById("loginSuccessMessage").style.display = "block";

      // Redirect to index.html after successful login
      setTimeout(() => {
          window.location.href = "index.html"; // Redirect to index.html
      }, 2000); // Wait for 2 seconds before redirecting
  } else {
      alert("Please fill all fields!");
  }
});
