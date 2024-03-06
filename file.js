document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("increment-btn");
    const subtractButton = document.getElementById("subtract-btn");
    const resetButton = document.getElementById("reset-btn");

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

    subtractButton.addEventListener("click", function() {
        // Decrement counter value
        counter--;
        counterElement.textContent = counter;

        // Store updated counter value in local storage
        localStorage.setItem("userCounter", counter.toString());
    });

    resetButton.addEventListener("click", function() {
        // Reset counter value to 0
        counter = 0;
        counterElement.textContent = counter;

        // Store updated counter value in local storage
        localStorage.setItem("userCounter", counter.toString());
    });
});
