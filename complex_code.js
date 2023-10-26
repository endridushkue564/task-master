/*****************************************************
 * Filename: complex_code.js
 * Description: A complex and elaborate JavaScript code showcasing various advanced techniques and concepts.
 ******************************************************/

// Global variables
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let shoppingCart = [];
let loggedInUser = null;

/******************************************************
 * Data Structures
 ******************************************************/

// Class representing a Product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  toString() {
    return `${this.name} - $${this.price.toFixed(2)}`;
  }
}

// Class representing a User
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login() {
    loggedInUser = this;
    console.log(`Welcome, ${this.username}!`);
  }

  logout() {
    console.log(`Goodbye, ${this.username}!`);
    loggedInUser = null;
  }
}

/********************************************************
 * Functions
 ********************************************************/

// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Function to add a product to the shopping cart
function addToCart(product) {
  shoppingCart.push(product);
  console.log(`${product.name} added to the shopping cart.`);
}

// Function to display the shopping cart
function displayShoppingCart() {
  if (shoppingCart.length === 0) {
    console.log('The shopping cart is empty.');
  } else {
    console.log('Shopping Cart:');
    shoppingCart.forEach((product) => console.log(product.toString()));
  }
}

/********************************************************
 * Execution
 ********************************************************/

// Login
const user1 = new User('john.doe', 'password123');
user1.login();

// Add products to the shopping cart
addToCart(new Product(1, 'Apple', 0.99));
addToCart(new Product(2, 'Banana', 0.65));
addToCart(new Product(3, 'Orange', 1.25));

// Display the shopping cart
displayShoppingCart();

// Calculate and display the sum of numbers
const sum = calculateSum(numbers);
console.log(`Sum of numbers: ${sum}`);

// Logout
user1.logout();

/******************************************************
 * Sample Output:
 *
 * Welcome, john.doe!
 * Apple added to the shopping cart.
 * Banana added to the shopping cart.
 * Orange added to the shopping cart.
 * Shopping Cart:
 * Apple - $0.99
 * Banana - $0.65
 * Orange - $1.25
 * Sum of numbers: 55
 * Goodbye, john.doe!
 ******************************************************/