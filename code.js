let body = document.querySelector("body")
let gift = document.querySelector(".gift").addEventListener("click", openGift);
let giftTop = document.querySelector(".gift-top");
let giftText = document.querySelector(".gift-text");
let giftBox = document.querySelector(".gift-box");

function openGift(){
  giftTop.classList.add("boxOpen");
  giftBox.classList.add("boxDown");
  body.classList.add("open")

}