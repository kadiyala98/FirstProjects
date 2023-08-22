// routing.js

function goToHome() {
  window.location.href = "/Home.html";
}

function goToMensPage() {
  window.location.href = "/shopingmens/mens.html";
}

function goToWomensPage() {
  window.location.href = "/shopingwomen/shoppingwomen.html";
}

function goToKidsPage() {
  window.location.href = "/shoppingkids/shoppingkids.html";
}

function goToAboutUs() {
  window.location.href = "/aboutus.html";
}

function goToLogin() {
  window.location.href = "/login.html";
}

function goToSignup() {
  window.location.href = "/signup.html";
}
function goToHome(){
  window.location.href="/Home.html"
}
// Define an array to store cart items
const cartItems = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    // Create an object representing the product
    const product = { name: productName, price: price };

    // Add the product to the cartItems array
    cartItems.push(product);

    // Save the cartItems array in localStorage (you can use other methods to store cart data)
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Redirect to the cart.html page
    window.location.href = '/cart.html';
}

