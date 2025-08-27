
  // Step 1: Select the navbar heart count
  const heartCount = document.getElementById("heart-count");

  // Step 2: Select all card hearts
  const cardHearts = document.querySelectorAll(".card-heart");

  // Step 3: Loop through each card heart
  cardHearts.forEach(function(heart) {
    heart.addEventListener("click", function() {
      // Step 4: Get current count from navbar
      let currentCount = parseInt(heartCount.textContent);

      // Step 5: Increase by 1
      heartCount.textContent = currentCount + 1;

      // Optional: change card heart style (filled)
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
    });
  });
