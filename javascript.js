const form = document.getElementById('form')
const password = document.getElementById('password')
const show = document.getElementById('show')

form.addEventListener('change', (event) => {
  if (show.checked) {
    password.setAttribute('type', 'text')
  } else {
    password.setAttribute('type', 'password')
  }
})
