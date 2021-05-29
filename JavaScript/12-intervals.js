let counter = 0

function count() {
  counter++
  document.querySelector('h1').innerHTML = counter
}

setInterval(count, 1000)
