document.getElementById("addToCart").addEventListener("click", function() {
    alert("Product added to cart!");
});

// Simulate adding customer reviews
const reviews = [
    "Great product, highly recommend!",
    "Good value for money.",
    "Fast shipping, product as described."
];

const reviewsContainer = document.getElementById("reviews-container");
reviewsContainer.innerHTML = "";
reviews.forEach(review => {
    let reviewElement = document.createElement("p");
    reviewElement.textContent = review;
    reviewsContainer.appendChild(reviewElement);
});

// Add click event for related products
document.querySelectorAll(".related-items .item").forEach(item => {
    item.addEventListener("click", function() {
        alert("You selected: " + this.textContent);
    });
});