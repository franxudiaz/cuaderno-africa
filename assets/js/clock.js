function updateClock() {
    const now = new Date();
    
    // Opciones para la fecha: "Lunes, 22 de Diciembre de 2025"
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('es-ES', dateOptions);
    
    // Opciones para la hora: "23:45:12"
    const timeString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Capitalizar la primera letra de la fecha (Lunes...)
    const capitalizedDate = dateString.charAt(0).toUpperCase() + dateString.slice(1);

    const dateElement = document.getElementById('date-display');
    const timeElement = document.getElementById('time-display');

    if (dateElement) dateElement.textContent = capitalizedDate;
    if (timeElement) timeElement.textContent = timeString;
}

// Actualizar inmediatamente y luego cada segundo
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
});
