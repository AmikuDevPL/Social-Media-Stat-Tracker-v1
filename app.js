let theme = localStorage.getItem("theme");

if (theme === "dark") {
   document.body.classList.add("dark");
   document.querySelector(".actual").style.left = "50%";
} else {
   document.body.classList.remove("dark");
   document.querySelector(".actual").style.left = "0";
}

const themeButtonLight = document.querySelector(".light-theme-button");
const themeButtonDark = document.querySelector(".dark-theme-button");

let newTheme;

themeButtonLight.addEventListener("click", () => {
   newTheme = "light";
   localStorage.setItem("theme", "light");
   theme = newTheme;
   if (theme === "dark") {
      document.body.classList.add("dark");
      document.querySelector(".actual").style.left = "50%";
   } else {
      document.body.classList.remove("dark");
      document.querySelector(".actual").style.left = "0";
   }
});

themeButtonDark.addEventListener("click", () => {
   newTheme = "dark";
   localStorage.setItem("theme", "dark");
   theme = newTheme;
   if (theme === "dark") {
      document.body.classList.add("dark");
      document.querySelector(".actual").style.left = "50%";
   } else {
      document.body.classList.remove("dark");
      document.querySelector(".actual").style.left = "0";
   }
});
