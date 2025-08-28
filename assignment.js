// Step 1: navbar heart count
  const heartCount = document.getElementById("heart-count");

  const cardHearts = document.querySelectorAll(".card-heart");

  cardHearts.forEach(function(heart) {
    heart.addEventListener("click", function() {
      let currentCount = parseInt(heartCount.textContent);

      heartCount.textContent = currentCount + 1;

      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
    });
  });


  //  navbar coin count
  const coinCount = document.getElementById("coin-count");

  const callButtons = document.querySelectorAll(".call-btn");

  // history list
  const historyList = document.getElementById("history-list");

  callButtons.forEach(function(button) {
    button.addEventListener("click", function() {

      const card = button.closest(".card");

      const serviceName = card.querySelector(".service-name").textContent;
      const serviceNumber = card.querySelector(".service-number").textContent;

      alert(`Calling: ${serviceName} (${serviceNumber})`);

      let currentCoins = parseInt(coinCount.textContent);
      if (currentCoins >= 20) {
        coinCount.textContent = currentCoins - 20;

        // Save call in history
        const li = document.createElement("li");
        const now = new Date();
        li.textContent = `${serviceName} (${serviceNumber}) — ${now.toLocaleString()}`;

        historyList.insertBefore(li, historyList.firstChild);
      } else {
        alert("Not enough coins!");
      }
    });
  });

  // Navbar copy button count
  const navbarCopyCount = document.getElementById("navbar-copy-count");

  const cardCopyButtons = document.querySelectorAll(".card-copy-btn");

  cardCopyButtons.forEach(function(button) {
    button.addEventListener("click", function() {

      const card = button.closest(".card");

      const serviceNumber = card.querySelector(".service-number").textContent;

      navigator.clipboard.writeText(serviceNumber).then(() => {
        alert("The number has been copied!");

        let currentNavbarCount = parseInt(navbarCopyCount.textContent);
        navbarCopyCount.textContent = currentNavbarCount + 1;
        let cardCountSpan = button.querySelector(".card-copy-count");
        let currentCardCount = parseInt(cardCountSpan.textContent);
        cardCountSpan.textContent = currentCardCount + 1;
      });
    });
  });

  document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("history-list").innerHTML = "";
  });







