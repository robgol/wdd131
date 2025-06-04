// Review Count Update Script
document.addEventListener("DOMContentLoaded", () => {
    const reviewCounterKey = "reviewCount"; // LocalStorage key
    const displayCounter = document.getElementById("reviewCount");

    // Increment the counter on page load
    let currentCount = parseInt(localStorage.getItem(reviewCounterKey) || "0", 10);
    currentCount++;
    localStorage.setItem(reviewCounterKey, currentCount);

    // Update the DOM element with the updated count
    displayCounter.textContent = currentCount;
});