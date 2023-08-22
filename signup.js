document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registration-form');
  registrationForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Gather form data
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phonenumber').value;
    const referralCode = document.getElementById('referralcode').value;
    const agreeTerms = document.getElementById('agree-terms').checked;
    
    // Validate form data (you can add more validation as needed)
    if (!firstName || !lastName || !email || !phoneNumber || !referralCode || !agreeTerms) {
      alert('Please fill in all the required fields and agree to the terms and conditions.');
      return;
    }
    
    // Create an object to hold the registration data
    const registrationData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      referralCode,
    };
    
    // Send the registration data to the server
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Registration successful!');
          // Optionally, you can redirect to another page or perform other actions here
        } else {
          alert('Registration failed. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  });
  
  // Handle cancel registration button click
  const cancelRegistrationButton = document.getElementById('cancel-registration');
  cancelRegistrationButton.addEventListener('click', function () {
    // You can add code here to clear the form fields or perform other actions
    alert('Registration canceled.');
  });
});
