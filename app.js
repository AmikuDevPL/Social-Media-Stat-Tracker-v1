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

function applyTheme(theme) {
   localStorage.setItem("theme", theme);
   document.body.classList.toggle("dark", theme === "dark");
   document.querySelector(".actual").style.left =
      theme === "dark" ? "50%" : "0";
}

themeButtonLight.addEventListener("click", () => applyTheme("light"));
themeButtonDark.addEventListener("click", () => applyTheme("dark"));

const menu = document.querySelector(".menu");
const toggleMenuButton = document.querySelector(".toggle-menu");
let isMenuOpened = false;
toggleMenuButton.addEventListener("click", () => {
   isMenuOpened = !isMenuOpened;
   if (!isMenuOpened) {
      document.querySelector(".opened-menu").style.display = "none";
      document.querySelector(".closed-menu").style.display = "block";
      menu.style.height = menu.scrollHeight + "px";
      requestAnimationFrame(() => {
         menu.style.height = "0px";
      });
   } else {
      document.querySelector(".opened-menu").style.display = "block";
      document.querySelector(".closed-menu").style.display = "none";
      document.querySelector(".menu").style.height = "auto";
      menu.style.height = "0px";
      requestAnimationFrame(() => {
         menu.style.height = menu.scrollHeight + "px";
      });
   }
});

const accounts = document.querySelector(".accounts");
const toggleAccountsButton = document.querySelector(".toggle-accounts");
let isAccountsOpened = false;
toggleAccountsButton.addEventListener("click", () => {
   isAccountsOpened = !isAccountsOpened;
   if (!isAccountsOpened) {
      document.querySelector(".opened-accounts").style.display = "none";
      document.querySelector(".closed-accounts").style.display = "block";
      accounts.style.height = accounts.scrollHeight + "px";
      requestAnimationFrame(() => {
         accounts.style.height = "0px";
      });
   } else {
      document.querySelector(".opened-accounts").style.display = "block";
      document.querySelector(".closed-accounts").style.display = "none";
      accounts.style.height = "0px";
      requestAnimationFrame(() => {
         accounts.style.height = accounts.scrollHeight + "px";
      });
   }
});
