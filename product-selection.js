import { trendingData } from "./trending-data.js";

const productPage = document.querySelector(".trending-page");

// Render current product selection to page
window.addEventListener("load", () => {
  let num = productPage.id;
  console.log(num);

  let html = "";
  html += `
    <img src="../${trendingData[num].img}" alt="" />

    <div class="product">
      <h4>Royal Apparel</h4>
      <h2>${trendingData[num].name}</h2>
      <h3 class="product-price">${trendingData[num].price}</h3>
      <h4>Pay in 4 interest-free installments for orders over $50.00 with installments powered by Affirm Learn more</h4>
      <h4>Size</h4>
      <ul class="product-choices">
        <li class="gc-price-selected"     id="pc-1">Small</li>
        <li id="pc-2">Medium</li>
        <li id="pc-3">Large</li>
        <li id="pc-4">XL</li>
        <li id="pc-5">2XL</li>
      </ul>
      <h4>Quantity</h4>
      <div class="giftcard-quantity-div">
        <button class="gc-minus"><i class="fa-solid     fa-minus"></i></button>
        <p id="quantity-amount">1</p>
        <button class="gc-plus"><i class="fa-solid    fa-plus"></i></button>
      </div>
      <button class="gc-add-to-cart">Add to cart</button>
      <h5>More payment options</h5>
      <h3>${trendingData[num].name}</h3>
      <ul class="product-extra-info">
        <li>Unisex</li>
        <li>Made in U.S.A.</li>
        <li>Pre-Washed for a no-shrink true fit.</li>
        <li>Super Heavy Weight Shrink Free</li>
        <li>Oversized Fit</li>
      </ul>
    </div>
  `;
  productPage.innerHTML = html;

  // Fill in background of selected product size
  const productChoices = document.querySelector(".product-choices");

  const pc1 = document.getElementById("pc-1");
  const pc2 = document.getElementById("pc-2");
  const pc3 = document.getElementById("pc-3");
  const pc4 = document.getElementById("pc-4");
  const pc5 = document.getElementById("pc-5");

  productChoices.addEventListener("click", (e) => {
    if (!e.target.id) {
      return;
    } else {
      priceSelection(e.target.id);
    }
  });

  function priceSelection(id) {
    pc1.classList.remove("gc-price-selected");
    pc2.classList.remove("gc-price-selected");
    pc3.classList.remove("gc-price-selected");
    pc4.classList.remove("gc-price-selected");
    pc5.classList.remove("gc-price-selected");
    const currentSizeChoice = document.getElementById(`${id}`);
    currentSizeChoice.classList.add("gc-price-selected");
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
});
