"use strict";
// ************* GLOBALS*************
let totalVotes = 25;
let productArray = [];
// storage - products[]
// dom windows img and list


// *********DOM WIDOWS************

let items = document.getElementById('Items');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');
let resultBtn = document.getElementById('viewResults');
let ul = document.getElementById('resultsBox');




// ********* CONSTRUCTOR FUNCTION**********
function Product(name, imgExtension = 'jpg') {
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
function randomIndex() {
  return Math.floor(Math.random() * productArray.length);

}



function renderImg() {
  // console.log('WHere are bug');
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();
  console.log(imgOneIndex);
  while (imgOneIndex === imgTwoIndex || imgThreeIndex === imgOneIndex || imgThreeIndex === imgTwoIndex) {
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }


  console.log(productArray[imgOneIndex]);

  imgOne.src = productArray[imgOneIndex].img;
  imgTwo.src = productArray[imgTwoIndex].img;
  imgThree.src = productArray[imgThreeIndex].img;
  imgOne.title = productArray[imgOneIndex].name;
  imgTwo.title = productArray[imgTwoIndex].name;
  imgThree.title = productArray[imgThreeIndex].name;
  imgOne.alt = `this is ${productArray[imgOneIndex].name}`;
  imgTwo.alt = `this is ${productArray[imgTwoIndex].name}`;
  imgThree.alt = `this is ${productArray[imgThreeIndex].name}`;
  productArray[imgOneIndex].view++;
  productArray[imgTwoIndex].view++;
  productArray[imgThreeIndex].view++;
}


// ************ EVENT HANDLERS**************
// function handleClick(event) {
//   let imgClicked = event.target.title;

//   for (let i = 0; i < productArray.length; i++) {
//     if (imgClicked === productArray[i].name) {
//       productArray[i].vote++;
//     }

//   }

// }
// renderImg();


// **********EXECUTTABLE CODE**************
let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');
productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);
console.log(productArray);
renderImg();
items.addEventListener('click', handleClick);
// resultBtn.addEventListener('click', handleShowResult);
