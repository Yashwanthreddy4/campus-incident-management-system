// For Registration form
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  // Simulate registration success
  if (name && email && password) {
      // Display success message in the HTML itself
      document.getElementById("successMessage").textContent = "Registration Successful!";
      document.getElementById("successMessage").style.display = "block"; // Make message visible

      // Redirect to index.html after successful registration
      setTimeout(() => {
          window.location.href = "index.html"; // Redirect to index.html
      }, 1000); // Wait 1 second before redirecting
  } else {
      alert("Please fill all fields!");
  }
});

// For Login form
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form data
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Simulate login success
  if (email && password) {
      // Display success message in the HTML itself
      document.getElementById("loginSuccessMessage").textContent = "Login Successful!";
      document.getElementById("loginSuccessMessage").style.display = "block"; // Make message visible

      // Redirect to index.html after successful login
      setTimeout(() => {
          window.location.href = "index.html"; // Redirect to index.html
      }, 1000); // Wait 1 second before redirecting
  } else {
      alert("Please fill all fields!");
  }
});
