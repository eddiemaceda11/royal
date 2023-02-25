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
