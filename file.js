document.addEventListener("DOMContentLoaded", function() {
  const counterElement = document.getElementById("counter");
  const incrementButton = document.getElementById("increment-btn");
  const subtractButton = document.getElementById("subtract-btn");
  const resetButton = document.getElementById("reset-btn");

  // Load counter value from Firebase
  let counterRef = ref(database, "userCounter");
  once(counterRef, "value", function(snapshot) {
    let counter = snapshot.val();
    if (!counter) {
      counter = 0;
    }
    counterElement.textContent = counter;
  });

  // Function to update counter value in Firebase
  function updateCounterValue(counter) {
    set(ref(database, "userCounter"), counter);
  }

  incrementButton.addEventListener("click", function() {
    // Increment counter value
    let counter = parseInt(counterElement.textContent);
    counter++;
    counterElement.textContent = counter;

    // Store updated counter value in Firebase
    updateCounterValue(counter);
  });

  subtractButton.addEventListener("click", function() {
    // Subtract from counter value
    let counter = parseInt(counterElement.textContent);
    counter--;
    counterElement.textContent = counter;

    // Store updated counter value in Firebase
    updateCounterValue(counter);
  });

  resetButton.addEventListener("click", function() {
    // Reset counter value to 0
    let counter = 0;
    counterElement.textContent = counter;

    // Store updated counter value in Firebase
    updateCounterValue(counter);
  });
}); 
