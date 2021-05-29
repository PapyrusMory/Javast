//Selectionner lee submit button  et le input

const submit = document.querySelector('#submit')

const newTask = document.querySelector('#task')

// Désactiver le bouton d'envoi par défaut :
submit.disable = true

newTask.onkeyup = function () {
  if (newTask.value.length > 0) {
    submit.disable = false
  } else {
    submit.disable = true
  }
}

document.querySelector('form').onsubmit = () => {
  const task = newTask.value

  const li = document.createElement('li')

  li.innerHTML = task

  document.querySelector('#tasks').append(li)

  //Clear out input field
  newTask.value = ''

  submit.disable = true

  //Stop form from submitting
  return false
}
