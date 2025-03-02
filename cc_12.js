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
