let button = document.querySelectorAll('button')

button.forEach(element => {
  element.addEventListener('click', () => {
    document.body.style.backgroundColor = element.classList[1]
  })
});
