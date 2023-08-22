document.addEventListener('DOMContentLoaded', function() {
  // Sample cart data (you can replace this with your cart logic)
  const cartItems = [
      { name: 'Product 1', price: 20.00 },
      { name: 'Product 2', price: 15.00 },
      // Add more items as needed
  ];

  const cartContainer = document.querySelector('.cart-items');
  const totalPriceElement = document.getElementById('total-price');

  // Function to update the cart HTML
  function updateCart() {
      cartContainer.innerHTML = ''; // Clear the cart
      let totalPrice = 0;

      // Loop through cart items and display them
      cartItems.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <p>${item.name} - $${item.price.toFixed(2)}</p>
          `;
          cartContainer.appendChild(cartItem);

          // Calculate total price
          totalPrice += item.price;
      });

      // Update the total price
      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  }

  // Initial cart update
  updateCart();
});
