"use strict";
// ************* GLOBALS*************
let totalVotes = 25;
let productArray = [];


// *********DOM WIDOWS************

let imgContainer = document.getElementById('imgContainer');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');
let resultBtn = document.getElementById('viewResults');
let ul = document.getElementById('resultsBox');
// ****** CANVAS AREA********
const canvasElem = document.getElementById('chart');
const ctx = document.getElementById('chart');


// ********* CONSTRUCTOR FUNCTION**********
function Product(name, imgExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.vote = 0;
  this.views = 0;
}




// ********** HELPER FUNCTION*****************
function randomIndex() {
  return Math.floor(Math.random() * productArray.length);

}


let indexArray = [];

function renderImg() {

  while (indexArray.length < 6) {
    let randomNum = randomIndex();
    if (!indexArray.includes(randomNum)) {
      indexArray.push(randomNum);
    }

  }




  let imgOneIndex = indexArray.pop();
  let imgTwoIndex = indexArray.pop();
  let imgThreeIndex = indexArray.pop();
  console.log(imgOneIndex);
  // while (imgOneIndex === imgTwoIndex || imgThreeIndex === imgOneIndex || imgThreeIndex === imgTwoIndex) {
  //   imgTwoIndex = randomIndex();
  //   imgThreeIndex = randomIndex();
  // }



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

// ******* FUNCTION RENDER CHART*********
function renderChart() {
  let productNames = [];
  let productVotes = [];
  let productViews = [];

  for (let i = 0; i < productArray.length; i++) {
    productNames.push(productArray[i].name);
    productViews.push(productArray[i].view);
    productVotes.push(productArray[i].vote);
  }
  let ChartObj = {

    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        borderWidth: 1

      },
      {
        label: '# of Views',
        data: productViews,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  let myChart = new Chart(ctx, ChartObj);
}



// ************ EVENT HANDLERS **************
function handleClick(event) {
  let imgClicked = event.target.title;
  console.log(imgClicked);
  totalVotes--;

  for (let i = 0; i < productArray.length; i++) {
    if (imgClicked === productArray[i].name) {
      productArray[i].vote++;
      break;
    }

  }
  renderImg();

  if (totalVotes === 0) {
    imgContainer.removeEventListener('click', handleClick);
    renderChart();
  }
  // ******** LOCAL STORAGE*********
  let stringifiedPrdouct = JSON.stringify(productArray);

  localStorage.setItem('myProducts', stringifiedPrdouct);

}

function handleShowResult() {
  if (totalVotes === 0) {
    renderChart();


  }
}

let retrievedProduct = localStorage.getItem('myProducts');

let parsedProduct = JSON.parse(retrievedProduct);










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
imgContainer.addEventListener('click', handleClick);
// resultBtn.addEventListener('click', handleShowResult);
