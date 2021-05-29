document.querySelector('form').onsubmit = function () {
  const name = document.querySelector('#name').value

  //const name = document.getElementById('name').value
  alert(`Hello ${name}`)
}
