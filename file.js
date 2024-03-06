 document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("increment-btn");
  
    // Load counter value from local storage
    let counter = localStorage.getItem("userCounter");
    if (!counter) {
      counter = 0;
    }
    counterElement.textContent = counter;
  
    incrementButton.addEventListener("click", function() {
      // Increment counter value
      counter++;
      counterElement.textContent = counter;
  
      // Store updated counter value in local storage
      localStorage.setItem("userCounter", counter.toString());
    });
  });
