// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  const priceValue = parseFloat(price.innerText);
  const qttyValue = quantity.valueAsNumber;

  let subTotalValue = priceValue * qttyValue;
  const subTotal = product.querySelector(".subtotal span");

  subTotal.innerText = subTotalValue;

  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProduct = document.getElementsByClassName("product");

  let value = 0;

  for (let product of multipleProduct) {
    value += updateSubtotal(product);
  }

  // ITERATION 3
  const total = document.querySelector("#total-value span");

  total.innerText = value;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  const fullProduct = product.parentNode;

  fullProduct.removeChild(product);

  console.log(fullProduct);

  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtns = document.getElementsByClassName("btn-remove");

  for (removeBtn of removeBtns) {
    removeBtn.addEventListener("click", removeProduct);
  }

  //... your code goes here
});
