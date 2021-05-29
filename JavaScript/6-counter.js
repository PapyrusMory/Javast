let counter = 0

function count() {
  counter++
  document.querySelector('h1').innerHTML = counter

  if (counter % 10 === 0) {
    alert(`Count is now ${counter}`)
  }
}

//Lorsque je mets le code le script dans le head de html j'aurai besoin d'un event listener DOMContentLoaded

/*document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').onclick = count
})*/

//Lorsque par je mets le script au bas de body dans html alors plus besoin de faire appel l'event listener DOMContentLoaded

document.querySelector('button').onclick = count
