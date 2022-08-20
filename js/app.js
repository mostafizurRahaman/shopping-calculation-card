const cartProducts = []; 
function display(cartarray){
   const tbody = document.getElementById("tbody");
   tbody.innerHTML = "";  
   let price = 0; 
   for(let i =0; i<cartarray.length; i++){
      const item = cartarray[i]; 
      const productName = cartarray[i].productName; 
      const productPrice = cartarray[i].price; 
      const tr = document.createElement("tr"); 
      tr.innerHTML = `
      <tr>
         <th class="uppercase font-bold">${i+1}</th>
         <td  class="uppercase font-bold">${productName}</td>
         <td  class="uppercase font-bold">${productPrice}</td>
      </tr>`; 
      tbody.appendChild(tr); 
      price = item.price + price; 
   }
  const tfoot = document.getElementById('tfoot'); 
  tfoot.innerHTML = `
         <tr>
               <td class="text-lg  bg-pink-500" ></td>
               <td class="text-lg text-white  bg-pink-500" >Total Price</td>
               <td class="text-lg text-white  bg-pink-500" >${price}</td>
         </tr>
  `
   
   
}

function addToCart(element){
      const elementParent = element.parentNode.parentNode; 
      const productName = elementParent.children[0].innerText; 
      const productPriceString = elementParent.children[1].children[0].innerText; 
      const productPrice = parseFloat(productPriceString); 
      
      const product = {
         productName : productName, 
         price: productPrice, 
      }
      cartProducts.push(product); 
      document.getElementById('total-added-product').innerText = cartProducts.length; 
      
      
      display(cartProducts); 
      
}

document.addEventListener('contextmenu', function(event){
   event.preventDefault(); 
}, false); 



