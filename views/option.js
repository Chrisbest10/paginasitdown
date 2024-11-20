document.querySelectorAll('ul').forEach(ul => {
  ul.addEventListener('click', () => {
    document.querySelector('nav').style.display = 'block';
  });
});            