const toggleBtn = document.getElementById("dark-button");
const darkIcon = document.getElementById("dark");
const lightIcon = document.getElementById("light");

// apply saved theme on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.documentElement.classList.add("light-theme");
  darkIcon.style.display = "inline";
  lightIcon.style.display = "none";
} else {
  darkIcon.style.display = "none";
  lightIcon.style.display = "inline";
}

// toggle theme
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");

  const isLight = document.documentElement.classList.contains("light-theme");

  if (isLight) {
    localStorage.setItem("theme", "light");
    darkIcon.style.display = "inline";
    lightIcon.style.display = "none";
  } else {
    localStorage.setItem("theme", "dark");
    darkIcon.style.display = "none";
    lightIcon.style.display = "inline";
  }
});
