// JavaScript for Shopping Website

// Sample products data (you can replace this with your actual data)
const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 20.00,
      image: ''
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30.00,
      image: 'product2.jpg'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 25.00,
      image: 'product3.jpg'
    }
  ];
  
  // Cart to hold selected items
  let cart = [];
  
  // Function to display products on the shop page
  function displayProducts() {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
  
      productsContainer.appendChild(productDiv);
    });
  }
  
  // Function to add item to cart
  function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
      cart.push(product);
      updateCart();
    }
  }
  
  // Function to update cart display
  function updateCart() {
    const cartItemsContainer = document.querySelector('.cart ul');
    cartItemsContainer.innerHTML = '';
  
    cart.forEach(item => {
      const cartItem = document.createElement('li');
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <span>${item.name} - $${item.price.toFixed(2)}</span>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
    });
  }
  
  // Function to remove item from cart
  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
  }
  
  // Function to handle checkout
  function checkout() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Thank you for your purchase!');
      cart = []; // Clear the cart
      updateCart(); // Update cart display
    }
  }
  
  // Initial display of products
  displayProducts();
  