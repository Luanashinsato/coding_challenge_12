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
