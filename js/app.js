"use strict";
// ************* GLOBALS*************
let totalVotes = 25;
let productsBox = [];

let bagR2 = new Product('bagR2','img.bag.jpg');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let gum = new Product('gum');
let chair = new Product('chair');
let greenMonster = new Product('greenMonster');
let dogDuck = new Product('dogDuck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('petSweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let water = new Product('water');
let wineGlass = new Product('wineGlass');

// let products =
// storage - products[]
// dom windows img and list


// *********DOM WIDOWS************

let productBox = document.getElementById('productBox');
let productOne = document.getElementById('ImgOne');
let productTwo = document.getElementById('ImgTwo');
let productThree = document.getElementById('ImgThree');
let butotn = document.getElementById('viewResults');
let ul = document.getElementById('resultsBox');




// ********* CONSTRUCTOR FUNCTION**********
function Product(name, imgExtension = 'jpg'){
this.name = name;
this.img = `img/${name}.${imgExtension}`;
this.vote = 0;
this.views = 0;
}
// product img
// vote clicks
// times sceen
// name





// ********** HELPER FUNCTION*****************
function renderImg(){
  imgOne.src = productsBox[0].img;
  imgTwo.src = productsBox[7].img;
  imgThree.src = productsBox[10].img;
}
// function randomVote




// ************ EVENT HANDLERS**************



// **********EXECUTTABLE CODE**************
// let bagR2 = new Product('bagR2','img.bag.jpg');
// let banana = new Product('banana');
// let bathroom = new Product('bathroom');
// let boots = new Product('boots');
// let breakfast = new Product('breakfast');
// let gum = new Product('gum');
// let chair = new Product('chair');
// let greenMonster = new Product('greenMonster');
// let dogDuck = new Product('dogDuck');
// let dragon = new Product('dragon');
// let pen = new Product('pen');
// let petSweep = new Product('petSweep');
// let scissors = new Product('scissors');
// let shark = new Product('shark');
// let sweep = new Product('sweep');
// let tauntaun = new Product('tauntaun');
// let unicorn = new Product('unicorn');
// let water = new Product('water');
// let wineGlass = new Product('wineGlass');
productsBox.push(bagR2, banana, bathroom, boots, breakfast, gum, chair, greenMonster, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, water, wineGlass);
console.log(productsBox);
renderImg();

// event listeners
// clicks on imagaes
// render new images
// track votes
// click button
// render the list of all the info on the products

// function to get random images
// function that will display the images



