// Prevent flash of wrong theme
(function () {
  let theme = null;
  try {
    theme = localStorage.getItem("theme");
  } catch (e) {
    // Blocked storage must not stop data-theme from being set.
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = theme === "dark" || (!theme && prefersDark) ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", resolved);
})();
