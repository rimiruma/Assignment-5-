// hart button
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


// coin and historyList
  // Select navbar coin count
  const coinCount = document.getElementById("coin-count");

  // Select all call buttons
  const callButtons = document.querySelectorAll(".call-btn");

  // Select history list
  const historyList = document.getElementById("history-list");

  // Add event listeners to each call button
  callButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Find parent card
      const card = button.closest(".card");

      // Get service name & number
      const serviceName = card.querySelector(".service-name").textContent;
      const serviceNumber = card.querySelector(".service-number").textContent;

      // Show alert
      alert(`Calling: ${serviceName} (${serviceNumber})`);

      // Deduct 20 coins after alert
      let currentCoins = parseInt(coinCount.textContent);
      if (currentCoins >= 20) {
        coinCount.textContent = currentCoins - 20;

        // Save call in history
        const li = document.createElement("li");
        const now = new Date();
        li.textContent = `${serviceName} (${serviceNumber}) — ${now.toLocaleString()}`;

        // Add newest call on top
        historyList.insertBefore(li, historyList.firstChild);
      } else {
        alert("Not enough coins!");
      }
    });
  });

// copy button
  // Navbar copy button count
  const navbarCopyCount = document.getElementById("navbar-copy-count");

  // Select all card copy buttons
  const cardCopyButtons = document.querySelectorAll(".card-copy-btn");

  cardCopyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Find parent card
      const card = button.closest(".card");

      // Get the service number
      const serviceNumber = card.querySelector(".service-number").textContent;

      // Copy number to clipboard
      navigator.clipboard.writeText(serviceNumber).then(() => {
        // Show alert
        alert("The number has been copied!");

        // ---- After OK clicked ----

        // 1. Increase Navbar Copy count
        let currentNavbarCount = parseInt(navbarCopyCount.textContent);
        navbarCopyCount.textContent = currentNavbarCount + 1;

        // 2. Increase this Card's Copy count
        let cardCountSpan = button.querySelector(".card-copy-count");
        let currentCardCount = parseInt(cardCountSpan.textContent);
        cardCountSpan.textContent = currentCardCount + 1;
      });
    });
  });

  document.getElementById("clearBtn").addEventListener("click", function () {
    // Clear the call history list
    document.getElementById("history-list").innerHTML = "";
  });







