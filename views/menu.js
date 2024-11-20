document.querySelectorAll('.hamb').forEach(hamb => {
   hamb.addEventListener('click', () => {
     document.querySelector('.nav').style.display = 'block';
   });
});