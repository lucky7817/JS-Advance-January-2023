function solve() {
   document.querySelectorAll('.shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout)
   let cart = [];
   let outputElement = document.getElementsByTagName('textarea')[0];
   outputElement.value = '';

   function onClick(e) {
      if (e.target.tagName === 'BUTTON' && e.target.classList.contains ('add-product')) {
         const product = e.target.parentNode.parentNode;
         const productName = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({
            productName,
            price,
         });

         outputElement.value += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`

         console.log(productName, price);
      }
   }

   function checkout() {
      let products = new Set();
      cart.forEach(p => {
         products.add(p.productName)
      });

      let totalPrice = cart.reduce((total, currProd) => total + currProd.price ,0);

      outputElement.value += `You bought ${[...products.keys()].join(', ')} for ${totalPrice.toFixed(2)}.`;
   }  
}