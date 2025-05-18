const hambutton = document.querySelector('#menuButton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('show');
  document.querySelector('#navMenu').classList.toggle('show');
  hambutton.classList.toggle('show');
});

function toggleActive(element) {
  element.classList.toggle("active");
}