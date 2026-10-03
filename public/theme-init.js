// Prevent flash of wrong theme
(function () {
  const theme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = theme === "dark" || (!theme && prefersDark) ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", resolved);
})();
