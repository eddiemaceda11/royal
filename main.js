import { trendingData } from "./trending-data.js";

// Variables
const trendingCards = document.getElementById("trending-cards");

// Render trending section cards
let html = "";
trendingData.map((item) => {
  html += `
    <li>
      <a href="product-pages/${item.key}.html">
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

// Update quantity counter
const quantity = document.querySelector(".giftcard-quantity-div");
const quantityAmount = document.getElementById("quantity-amount");

quantity.addEventListener("click", (e) => {
  // check to see if minus is selected
  if (e.target.classList.contains("gc-minus")) {
    // if it is, check to see if quantity is 1
    // and if it is, return
    if (quantityAmount.textContent === "1") {
      return;
    }

    // Otherwise subtract quantity by 1
    // and update quantity display
    subtractQuantity();
    quantityAmount.textContent = subtractQuantity();
  }
  // check to see if plus is selected
  if (e.target.classList.contains("gc-plus")) {
    // if it is, add 1 to quantity and
    // update display
    addQuantity();
    quantityAmount.textContent = addQuantity();
  }
});

function addQuantity() {
  // convert current quantity amt to a number
  const quantityAmountNum = Number(quantityAmount.textContent);

  return quantityAmountNum + 1;
}

function subtractQuantity() {
  // convert current quantity amt to a number
  const quantityAmountNum = Number(quantityAmount.textContent);

  return quantityAmountNum - 1;
}
