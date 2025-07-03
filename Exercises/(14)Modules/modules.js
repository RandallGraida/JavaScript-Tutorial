// Modules allows us to access other files instead of using only one file
// import - gets from another file
import { tutorialProducts } from "./modulesData.js";

function sampleProducts(){
  let html = '';

  // Always create the HTML when you want to ".innerHTML"
  tutorialProducts.forEach(product => {
    html += `<div>
      <h3>${product.gpu}</h3>
      <p>Price: $${product.price}</p>
    </div>`;
  });

  document.querySelector('.js-tutorialCart')
    .innerHTML = html;
}

sampleProducts();
  