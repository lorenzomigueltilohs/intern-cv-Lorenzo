document.addEventListener("DOMContentLoaded", function () {
  const userName = document.querySelector("header h1").textContent;

  const modal = document.getElementById("welcomeModal");
  const welcomeText = document.getElementById("welcomeText");
  const closeButton = document.getElementById("closeModal");

  welcomeText.textContent = "Welcome to my website take a look around and learn more about my skills, education and experiences" + "!";
  modal.showModal();

  closeButton.addEventListener("click", function () {
    modal.close();
  });

   // Dark Mode
  const toggleButton = document.getElementById("themeToggle");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Light Mode";
    } else {
      toggleButton.textContent = "Dark Mode";
    }
  });
});
