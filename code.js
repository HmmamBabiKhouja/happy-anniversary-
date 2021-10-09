let body = document.querySelector("body")
let gift = document.querySelector(".gift");
let giftTop = document.querySelector(".gift-top");
let giftText = document.querySelector(".gift-text");
let giftBox = document.querySelector(".gift-box");
let cake = document.querySelector(".cake");

function init(){
  gift.addEventListener("click", openGift);
  gift.classList.add("dukdik")
}

function openGift(){
  giftTop.classList.add("boxOpen");
  giftBox.classList.add("boxDown");
  body.classList.add("open");
  gift.classList.remove("dukdik");
  giftText.classList.add("textAppear");
  cake.classList.add("cakeAppear");
}

init();