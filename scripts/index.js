// Set Theme from storage/preferences. Toggle the theme from light mode to dark mode.
const toggleTheme = document.getElementById("theme-toggle");
const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);
toggleTheme.onclick = function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    if (currentTheme === "light") {
        targetTheme = "dark";
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
};

// Listener to go back to top if header logo clicked.
const headerLogoConatiner = document.querySelector('.header-logo-container');

headerLogoConatiner.addEventListener('click', () => {
    location.href = '#top';
});