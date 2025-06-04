const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
];

// Populate `product_name` dropdown
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product_name");

  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id; 
    option.textContent = product.name; 
    productList.appendChild(option);
  });

  const reviewCounterKey = "reviewCount";

  const currentCount = parseInt(localStorage.getItem(reviewCounterKey) || "0", 10);

  console.log(`Total Reviews Submitted: ${currentCount}`);
  localStorage.setItem(reviewCounterKey, currentCount); 

  const form = document.querySelector("form[action='review.html']");
  if (form) {
    form.addEventListener("submit", () => {
      const newCount = currentCount + 1;
      localStorage.setItem(reviewCounterKey, newCount);
      console.log(`Reviews Completed: ${newCount}`);
    });
  }
});
