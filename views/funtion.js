const nav= document.querySelectorAll('nav ul li a');

nav.forEach(item => {
  item.addEventListener('click', () => {
    const sidemenu = document.getElementById('sidemenu');
    sidemenu.checked = false;
  });
});