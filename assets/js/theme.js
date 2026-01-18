/**
 * Theme Manager
 * Handles checking localStorage for the active theme and applying it to the document.
 * Redirects to login.html if no theme is found.
 */

(function () {
    const theme = localStorage.getItem('appTheme');
    const currentPath = window.location.pathname;
    const isLoginPage = currentPath.includes('login.html');

    // If no theme is saved and we are NOT on the login page, redirect to login
    if (!theme) {
        if (!isLoginPage) {
            window.location.href = 'login.html';
        }
        return;
    }

    // Apply the saved theme class to the <html> element
    document.documentElement.className = theme;

    // If we are on login page but already have a theme, redirect to index (optional convenience)
    if (isLoginPage && theme) {
        window.location.href = 'index.html';
    }
    // Dynamic Footer Logic
    window.addEventListener('DOMContentLoaded', () => {
        const footerText = document.querySelector('footer p');
        if (footerText) {
            if (theme === 'theme-marcos') {
                footerText.textContent = "Hecho con ❤️ para mi rubio preferido";
            } else {
                footerText.textContent = "Hecho con ❤️ para la mejor estudiante";
            }
        }
    });
})();

function setAppTheme(themeName) {
    localStorage.setItem('appTheme', themeName);
    document.documentElement.className = themeName;
    window.location.href = 'index.html';
}
