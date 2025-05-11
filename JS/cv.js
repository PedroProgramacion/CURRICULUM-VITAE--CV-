// Script para alternar entre modo claro y oscuro
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode'); // Alternar la clase dark-mode
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️'; // Cambiar texto a sol cuando esté en modo oscuro
        } else {
            toggleButton.textContent = '🌙'; // Cambiar texto a luna cuando esté en modo claro
        }
    });
});

// Script del Traductor de Google
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es', // Idioma original de la página (Español)
        includedLanguages: 'es,en,fr,de,it,pt,zh-CN,ja', // Idiomas disponibles
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Diseño simple
        autoDisplay: false // Evita que aparezca automáticamente el cuadro emergente
    }, 'google_translate_element');
}

// Cargar el script de Google Translate dinámicamente
function loadGoogleTranslateScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}

// Inicializar el traductor cuando la página cargue
window.addEventListener('load', () => {
    loadGoogleTranslateScript();
});