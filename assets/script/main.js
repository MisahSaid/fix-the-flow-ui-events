// Selecteer het twaalfde anker-element op de pagina
let interaction = document.querySelector('a:nth-of-type(12)')

// Voeg een eventlistener toe voor het 'click' event en het 'animationend' event
interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

// Definieer de jumpHandler functie die wordt aangeroepen bij 'click' en 'animationend' events
function jumpHandler() {
  // Toggle de 'jump' klasse op het geselecteerde element (voeg toe als het ontbreekt, verwijder als het aanwezig is)
  interaction.classList.toggle('jump')
  // Log een bericht naar de console om te laten zien dat jumpHandler is aangeroepen
  console.log('jumpHandler')
}


// mouseover 
let frontend = document.querySelector('a:nth-of-type(1)')

// interaction.addEventListener('mouseover', colorChangePink)
frontend.addEventListener('mouseover', colorChangePink)

function colorChangePink () {
  // interaction.classList.toggle('changePink')
  // frontend.classList.toggle('chnagePink')
  frontend.classList.add('changePink')
  console.log('textpink')
}


// mouseout
let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('mouseout', bgChange)

function bgChange () {
  sprint5.classList.toggle('bgChangeColor')
  console.log('bgcolor')
}

// double click
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('dblclick', spiegelbeeld)

function spiegelbeeld () {
  fix.classList.toggle('spiegelbeeld')
  console.log('mirror mirror on the wall!')
}

// touch start
let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('touchdown', ontap)

function ontap () {
  interface.classList.toggle('changePink')
  console.log('holddown')
}


// touchend
let userflow = document.querySelector('a:nth-of-type(11)')

userflow.addEventListener('touchend', touched)

function touched () {
  userflow.classList.toggle('bgChangeColor')
  console.log('touchend')
}