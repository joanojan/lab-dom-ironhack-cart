function updateSubtotal(product) {
  let price = product.querySelector(".price span").innerHTML;
  let quantity = product.querySelector(".quantity input").value;
  let subtotal = product.querySelector(".subtotal");
  let subtotalValue = price * quantity;
  subtotal.innerHTML = `$${subtotalValue}`;
  return subtotalValue;
}

function calculateAll() {
  let total = 0;
  const products = [...document.getElementsByClassName("product")];
  products.forEach((product) => (total += updateSubtotal(product)));
  let totalValue = document.getElementById("total-value").querySelector("span");
  totalValue.innerHTML = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.parentNode.parentNode;
  productRow.remove();

  calculateAll();
}

function createProduct() {
  const table = document.getElementById("cart");
  //I will clone the first row of the table and then change the content.
  const newRow = document.querySelector('.product').cloneNode(true);

  newRow.querySelector('.quantity input').value = 0;
  newRow.querySelector('.subtotal').innerHTML = '$0';
  
  const unitPrice = document.getElementById("new-product-price").value;
  const productName = document.getElementById("new-product-name").value;

  newRow.querySelector('.name span').textContent = productName;
  newRow.querySelector('.price span').textContent = unitPrice;

  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  table.querySelector('tbody').appendChild(newRow);
}

window.addEventListener("load", () => {
  document.getElementById('cart').addEventListener('click', function(event) {
    if (event.target.className === 'calculate') calculateAll(event);
    if (event.target.className === 'btn-remove') removeProduct(event);
    if (event.target.id === 'create') createProduct(event);
  })
});
