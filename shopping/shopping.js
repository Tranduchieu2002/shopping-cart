// read file data product
var items = [
  {
    product: "skirt",
    quantity: 1,
    price: 75,
    image: "../img/collec-3.png",
    size: "Small",
    remove: false,
  },
  {
    product: "trousers",
    quantity: 1,
    price: 99,
    image: "../img/collec-1.png",
    size: "Small",
    remove: false,
  },
  {
    product: "clothers",
    quantity: 1,
    price: 80,
    image: "../img/collec-7.png",
    size: "Midium",
    remove: false,
  },
  {
    product: "sunglasses",
    quantity: 1,
    price: 72,
    image: "../img/collec-8.png",
    size: "Large",
    remove: false,
  },
];

/* var fs = require('fs');
var obj;
let contents = fs.readFileSync('./data.json', 'utf8', function (err, data) {
  if (err) throw err;

});/* 
ite ms = JSON.parse(contents); */

// base
var productIFM = document.querySelector(".pro-content");
var inputQuantity = document.querySelector("#quantity");
var shipping = 0;

// function main

const Quantity = 0;
/* function addQuantity() {
  var minus= document.querySelector('btn-minus')
  var plus= document.querySelector('btn-plus')
  minus.addEventListener('click', function () {
    return valueQuantity + 1
  })
}
addQuantity() */
function updateProduct(index, quantity) {
  if (quantity < 1) return;
  items[index].quantity = quantity;
  Render();
}
/* function removeItem(product) {
  for (let i = 0; i < items.length; i++) {
      if (items[i].product == product) {
          items.splice(i, 1);
      }
  }
  render(items);
} */
function remove(index) {
  if (index == 0) return;
  items.splice(index, 1);
  Render();
}

function Render() {
  let subTutol = 0;
  items.forEach((item) => {
    subTutol += item.quantity * item.price;
  });
  const total = subTutol + shipping;
  // document.querySelector('.pro-cost').innerHTML = `$${items.price}`
  /* document.querySelector('.pro-inf ' ,h4).innerHTML = `$${items.price}`
   document.querySelector('.pro-cost').innerHTML = `$${items.price}` */
  const ren = items.map((item) => {
    if (!item.remove) {
      return `
        <li class="pro-items">
            <span>
              <img class="pro-img" src="${item.image}" alt="">
            </span>
            <div class="pro-inf">
               <h4>
          ${item.product}   
              </h4>
            <span class="pro-cost">
          $${(item.price * item.quantity).toFixed(2)}
            </span>
            <div class="pro-size">
              <span>
            Size: ${item.size}
              </span>
            </div>
            <div class="pro-quantity btn">
             <button> <i class="uil uil-minus btn-minus">   </i> </button>
              <input type="number" value="${
                item.quantity
              }" name="quantity" id="quantity">
            <button>  <i class="uil uil-plus btn-plus">   </i> </button>
            </div>
            <div class="pro-cost-right"> $${item.price.toFixed(2)}
                <i class="uil uil-times remove-product" )>    </i>
            </div>
            </div>
        </li>`;
    }
  });
  document.getElementById("pro-content").innerHTML = ren.join("");
  var removeItem = [...document.getElementsByClassName("remove-product")];
  const minusBtn = [...document.getElementsByClassName("btn-minus")];
  const plusBtn = [...document.getElementsByClassName("btn-plus")];
  //console.log(minusBtn,plusBtn)
  /*   removeItem.forEach(function (Element) {
  
        Element.addEventListener('click', function() {
          return  updateProduct(Element,Element.quantity -1)
        })
      Element.addEventListener("click", function () {    
        this.parentNode.parentNode.parentNode.remove()
      });
    });  */

  /* removeItem.forEach(rmv =>  */
  for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener("click", function () {
      remove(i);
    });
    minusBtn[i].addEventListener("click", function () {
      updateProduct(i, items[i].quantity - 1);
    });
    plusBtn[i].addEventListener("click", function () {
      updateProduct(i, items[i].quantity + 1);
    });
  }
  document.querySelector(".sub").innerHTML = `$${subTutol.toFixed(2)}`;
  document.querySelector(".total").innerHTML = `$${subTutol.toFixed(2)}`;
}
Render();

document.getElementsByClassName("btn-menu");
