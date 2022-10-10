var removeCartItemBtn = document.getElementsByClassName("btn-danger");

for (var i = 0; i < removeCartItemBtn.length; i++) {
  var button = removeCartItemBtn[i];

  button.addEventListener("click", function (event) {
    var buttonclicked = event.target;
    buttonclicked.parentElement.parentElement.remove();
    updateCartNummber();
  });

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    var quantityInput = quantityInputs[i];
    quantityInput.addEventListener('change' , function quantityCahnge(event){



    })
  }
}

function updateCartNummber() {
  var cartItemsContainer = document.getElementsByClassName("cart-items")[0];
  var cartItemsRow = cartItemsContainer.getElementsByClassName("cart-row");
  var total = 0;

  for (let i = 0; i < cartItemsRow.length; i++) {
    var cartRow = cartItemsRow[i];
    var priceQunatity = cartRow.getElementsByClassName("cart-price")[0];
    var CartQunatityInput = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];

    var price = parseFloat(priceQunatity.innerText.replace("$", " "));
    var quantity = CartQunatityInput.value;
    total = total + price * quantity;
  }

  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
