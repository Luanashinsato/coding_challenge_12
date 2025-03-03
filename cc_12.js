// TASK 1: Business Dashboard - DOM Element Selection and Creation
// Using both getElementById and querySelector to select the dashboard container
const dashboard = document.getElementById("dashboard"); 
const dashboardSelector = document.querySelector("#dashboard");

// Creating a new <div> element to represent the metric card
const revenueCard = document.createElement("div");

// Assigning a class and an id to the new element
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");

// Populating the card with a title and a placeholder value
revenueCard.innerHTML = "<h3>Revenue</h3> <p>$0</p>";

// Appending the new metric card to the dashboard container
dashboard.appendChild(revenueCard);



// TASK 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
// Selecting all elements with the class "metric-card"
const metricCards = document.querySelectorAll(".metric-card");

// Converting the resulting NodeList into an array
const metricCardsArray = Array.from(metricCards); 

// Using the array method .forEach() to update each card’s inner text 
metricCardsArray.forEach(card => {
    const header = card.querySelector("h3"); 
    header.textContent += " - Updated" // Appending " - Updated" to the headers
})



// TASK 3: Dynamic Inventory Management – Adding and Removing Items
// Writing a function that creates a new <li> element representing a product
const inventoryList = document.getElementById("inventoryList"); // Selecting the inventory list 
function addInventoryItem(productName) {
    const newProduct = document.createElement("li"); // Creating a new list item for the new product 
    newProduct.textContent = productName; // Setting the text content to the product name

    newProduct.setAttribute("class", "product-item"); // Adding a class to the <li> 
    newProduct.setAttribute("data-product", productName); // Adding a custom data attribute to the <li> 

    inventoryList.appendChild(newProduct); // Appending the new product item to the inventory list

    // Writing a function that removes a specific <li> when clicked
    newProduct.addEventListener("click", () => { 
        inventoryList.removeChild(newProduct); 
    }) 
}



// TASK 4: Business Customer Section – Handling Event Bubbling
const customerSection = document.getElementById("customerSection"); // Selecting the customer section

// Adding click event listener to the parent container 
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked");
});

// Creating customer cards dynamically
const customers = ["Customer 1", "Customer 2"];

customers.forEach((name) => {
    // Adding child elements with the class "customer-card"
    const customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.innerText = name;

    // Adding click event listener to each customer card
    customerCard.addEventListener("click", (event) => {
        console.log("Customer card clickled");
        event.stopPropagation(); // Calling stopPropagation() so that the parent's event handler does not trigger
    });

    customerSection.appendChild(customerCard); // Appending the customer cards to the customer section
});
