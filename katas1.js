function oneThroughTwenty() {
  let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++) {
      meuRetorno.push(counter)
  }
  return meuRetorno;
}
console.log(oneThroughTwenty());

// ----------------------------------------------------------------------------
function evensToTwenty(){
let pares = []
for(i=1; i <= 20; i++){
  if(i%2==0){
    pares.push(i)
  }
}
return pares
}
console.log(evensToTwenty())


// ----------------------------------------------------------------------------

function oddsToTwenty() {
let impares = []
for(i=1; i <= 20; i++){
  if(i%2 != 0){
    impares.push(i)
  }
}
return impares
}
console.log(oddsToTwenty())

// ----------------------------------------------------------------------------

function multiplesOfFive() {
    let multiplos = []
    for(i= 1; i <= 100; i++){
      if(i%5 === 0){
        multiplos.push(i)
      }
    }
    return multiplos
}
console.log(multiplesOfFive())

// ----------------------------------------------------------------------------

function squareNumbers() {
    let quadrados = []
    for(i=1; i <= 100; i++){  
      if(i*i <= 100){
        quadrados.push(i*i)
      }
    }
    return quadrados
}
console.log(squareNumbers())

// ----------------------------------------------------------------------------

function countingBackwards() {
  let inverso = [];
  for (let i = 20; i >= 1; i--) {
      inverso.push(i)
  }
  return inverso
}
console.log(countingBackwards());

// ----------------------------------------------------------------------------

  function evenNumbersBackwards() {
  let pares = []
  for(i = 20; i >= 1; i--){
    if(i%2==0){
      pares.push(i)
    }
  }
  return pares
  }
  console.log(evenNumbersBackwards())

// ----------------------------------------------------------------------------

function oddNumbersBackwards() {
let impares = []
for(i=20; i >= 1; i--){
  if(i%2 != 0){
    impares.push(i)
  }
}
return impares
}
console.log(oddNumbersBackwards())

// ----------------------------------------------------------------------------

function multiplesOfFiveBackwards() {
    let multiplos = []
    for(i= 100; i >= 1; i--){
      if(i%5 === 0){
        multiplos.push(i)
      }
    }
    return multiplos
}
console.log(multiplesOfFiveBackwards())

// ----------------------------------------------------------------------------

function squareNumbersBackwards() {
    let quadrados = []
    for(i=100; i >= 1; i--){  
      if(i*i <= 100){
        quadrados.push(i*i)
      }
    }
    return quadrados
}
console.log(squareNumbersBackwards())
