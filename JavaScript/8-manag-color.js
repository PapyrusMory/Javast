/*document.querySelectorAll('button').forEach(function (button) {
  button.onclick = function () {
    document.querySelector('#hello').style.color = button.dataset.color
  }
})*/

document.querySelectorAll('button').forEach(function (button) {
  button.onclick = function () {
    document.getElementById('hello').style.color = button.dataset.color
  }
})

/*document.querySelectorAll('button').forEach((button) => {
  button.onclick = () => {
    document.querySelector('#hello').style.color = button.dataset.color
  }
})*/
