// Esperar a que la página se haya cargado completamente
window.onload = function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none"; // Ocultar el loader cuando la página se haya cargado
  };
  
// Seleccionamos los elementos necesarios
const menuCheckbox = document.getElementById('menu');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

// Función para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    // Si el clic no fue en el checkbox, el icono de menú o el menú, cerramos el menú
    if (!menuCheckbox.contains(event.target) && !menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        menuCheckbox.checked = false; // Esto desmarcará el checkbox y cerrará el menú
    }
});

// Seleccionamos el checkbox del interruptor
const toggleSwitch = document.getElementById('toggle-dark-mode');

// Recuperamos el estado guardado del modo nocturno
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleSwitch.checked = true; // Activamos el interruptor
}

// Alternar entre modos al activar el interruptor
toggleSwitch.addEventListener('change', () => {
  const isDarkMode = toggleSwitch.checked;

  // Alternar la clase del cuerpo
  document.body.classList.toggle('dark-mode', isDarkMode);

  // Guardar la preferencia en localStorage
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});



  




  
  



