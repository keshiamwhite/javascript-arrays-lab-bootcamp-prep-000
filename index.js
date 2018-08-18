// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];



function destructivelyAppendKitten(name) {
 kittens.push(name);
 return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newArr = kittens.slice()
  newArr.push(name)
  return newArr
}

function prependKitten(name) {
  
}

function removeLastKitten() {
  
}

function removeFirstKitten() {
  
}