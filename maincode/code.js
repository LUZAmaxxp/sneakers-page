const imgarray = [
  "homeimages/nike-air-max-90-AJ1285-104-6.webp",
  "homeimages/pair-orange-shoes-yellow-background_896360-1892.jpeg",
  "homeimages/pngtree-vibrant-unisex-canvas-sport-sneakers-in-bright-orange-and-yellow-with-image_3744097.jpeg",
];

const priceshoes = ["$250.00", "$130.00", "$300.00"];
const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let currentImgIndex = 0;
let currentpriceshoe = 0;

const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");

function switchimg(event) {
  event.preventDefault;
  const shoeImage = document.getElementById("image1");
  const price = document.getElementById("price");

  currentImgIndex = (currentImgIndex + 1) % imgarray.length;
  currentpriceshoe = (currentImgIndex + 1) % priceshoes.length;

  shoeImage.src = imgarray[currentImgIndex];
  price.innerHTML = priceshoes[currentpriceshoe];
}

function switchprice(event) {
  event.preventDefault;

  const price = document.getElementById("price");

  currentpriceshoe = (currentImgIndex + 1) % priceshoes.length;

  price.innerHTML = priceshoes[currentpriceshoe];
}
let counterValue = 0;
function incrementNumber(event) {
  event.preventDefault;

  counterValue++;
  document.getElementById("counter").innerText = counterValue;
  if (counterValue >= 11) {
    counterValue = 0;
    document.getElementById("counter").innerText = counterValue;
  }
}
function decrementNumber(event) {
  event.preventDefault;
  counterValue--;
  document.getElementById("counter").innerText = counterValue;
  if (counterValue == -1) {
    counterValue = 10;
    document.getElementById("counter").innerText = counterValue;
  }
}
