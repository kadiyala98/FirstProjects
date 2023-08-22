// frontend.js

fetch('/api/products')
  .then(response => response.json())
  .then(data => {
    // Process and display data on your website
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching products: ' + error.message);
  });
