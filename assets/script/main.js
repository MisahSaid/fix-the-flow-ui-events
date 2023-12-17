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


// 1. mouseover 
let frontend = document.querySelector('a:nth-of-type(1)')

// interaction.addEventListener('mouseover', colorChangePink)
frontend.addEventListener('mouseover', colorChangePink)

function colorChangePink () {
  // interaction.classList.toggle('changePink')
  // frontend.classList.toggle('chnagePink')
  frontend.classList.add('changePink')
  console.log('textpink')
}


// 2. mouseout
let sprint5 = document.querySelector('a:nth-of-type(5)')

sprint5.addEventListener('mouseout', bgChange)

function bgChange () {
  sprint5.classList.toggle('bgChangeColor')
  console.log('bgcolor')
}

// 3. double click
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('dblclick', spiegelbeeld)

function spiegelbeeld () {
  fix.classList.toggle('spiegelbeeld')
  console.log('mirror mirror on the wall!')
}

// 4. touch start
let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('touchdown', ontap)

function ontap () {
  interface.classList.toggle('changePink')
  console.log('holddown')
}


// 5. touchend
let userflow = document.querySelector('a:nth-of-type(11)')

userflow.addEventListener('touchend', touched)

function touched () {
  userflow.classList.toggle('bgChangeColor')
  console.log('touchend')
}


// 6. Mousemove Event
// ik selecteer hier de button design 
let design = document.querySelector('a:nth-of-type(2)');

// Voeg een eventlistener toe voor het 'mousemove' event
design.addEventListener('mousemove', showImage);

// Functie om de foto te laten zien
function showImage() {
  // Maak een nieuw img-element aan
  let image = document.createElement('img');
  
  // de bron of te wel de img die ik wil laten zien
  image.src = 'https://i.pinimg.com/736x/a1/a2/a7/a1a2a76d7ae6fee0a3dd36554b72664a.jpg';
  
  //  de stijl in om de afbeelding over het hele scherm te bedekken
  image.style.position = 'fixed';
  image.style.top = '0';
  image.style.left = '0';
  image.style.width = '100%';
  image.style.height = '100%';
  image.style.zIndex = '9999'; 

  // Voeg de afbeelding toe aan de body van de pagina --> Ask krijn lol
  document.body.appendChild(image);
}



// 7.keypress 
let and = document.querySelector('a:nth-of-type(3)');

// hier word gezegd dat wat, de computer moet doen als de knop word ingedrukt op het 'and'-element  
and.addEventListener('keypress', keyPressed);{
  console.log('key ingedrukt: ' + event.key);
}


// 8.  contextmenu --> tekst verandering
let development = document.querySelector('a:nth-of-type(4)');

development.addEventListener('contextmenu', changeContext);

function changeContext (event){
  event.preventDefault ();
  development.textContent = 'hiiiiiii!';
}