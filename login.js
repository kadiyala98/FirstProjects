document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Gather form data
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // Validate form data (you can add more validation as needed)
    if (!username || !password) {
      alert('Please fill in both the username and password fields.');
      return;
    }
    
    // Create an object to hold the login data
    const loginData = {
      username,
      password,
      rememberMe,
    };
    
    // Send the login data to the server
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Login successful!');
          // Optionally, you can redirect to another page or perform other actions here
        } else {
          alert('Login failed. Please check your username and password.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  });
  
  // Handle cancel login button click
  const cancelLoginButton = document.getElementById('cancel-login');
  cancelLoginButton.addEventListener('click', function () {
    // You can add code here to clear the form fields or perform other actions
    alert('Login canceled.');
  });
});
