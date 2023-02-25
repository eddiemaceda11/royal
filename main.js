import { trendingData } from "./trending-data.js";

// Variables
const trendingCards = document.getElementById("trending-cards");

// Render trending section cards
let html = "";
trendingData.map((item) => {
  html += `
    <li>
      <a href="#">
        <img src=${item.img} alt="" />
        <h3>${item.name}</h3>
        <h4>${item.price}</h4>
      </a>
    </li>
  `;
});

trendingCards.innerHTML = html;

// Fill in background of selected gift card price
const giftcardPrices = document.querySelector(".amount-choices");
const gc1 = document.getElementById("gc-1");
const gc2 = document.getElementById("gc-2");
const gc3 = document.getElementById("gc-3");
const gc4 = document.getElementById("gc-4");

giftcardPrices.addEventListener("click", (e) => {
  if (!e.target.id) {
    return;
  } else {
    giftcardSelection(e.target.id);
    updateGiftcardPrice(e.target.textContent);
  }
});

function giftcardSelection(id) {
  gc1.classList.remove("gc-price-selected");
  gc2.classList.remove("gc-price-selected");
  gc3.classList.remove("gc-price-selected");
  gc4.classList.remove("gc-price-selected");

  const currentGiftcardChoice = document.getElementById(`${id}`);
  currentGiftcardChoice.classList.add("gc-price-selected");
}

// Update gift card price display to match selection
const displayedGiftcardPrice = document.getElementById("displayed-gc-price");

function updateGiftcardPrice(price) {
  displayedGiftcardPrice.textContent = "";
  displayedGiftcardPrice.textContent = `${price} USD`;
}
