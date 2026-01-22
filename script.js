document.addEventListener("DOMContentLoaded", function () {
  const userName = document.querySelector("header h1").textContent;
  alert("Welcome to my website, " + userName + "!");

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
