let prdID = 113;
let cartCounter = 0;
function addNewProduct(pressedButton) {
    let newPrdBox = document.getElementById("new-prd-box");
    let prdBox = document.getElementsByClassName("prd-box")[0];

    if (pressedButton == 'btn-add-product') {
        document.getElementsByClassName('new-prd-id')[0].innerHTML = `<p>New Product ID: PRD${prdID}</p>`
        newPrdBox.style.display = 'block'
        prdBox.style.height = '250px'
    } else if (pressedButton == 'btn-add-new-prd') {
        let prdName = document.getElementById('add-prd-name');
        let prdPrice = document.getElementById('add-prd-price');
        prdBox.innerHTML += `<div class="prd">
                <div class="prd-id"><p>PRD${prdID}</p></div>
                <div class="prd-name"><p>${prdName.value.toString().toUpperCase()}</p></div>
                <div class="prd-price"><p>RS ${prdPrice.value}</p></div>
                <div class="prd-buy">
                  <img
                    id="${prdID - 101}"
                    src="/images/icons8_fast_cart_60px.png"
                    alt="BUY"
                    onclick="addToCart('${prdID - 101}')"
                  />
                </div>`;
        prdID = prdID + 1;
        newPrdBox.style.display = 'none'
        prdBox.style.height = '440px'
        document.getElementsByClassName('new-prd-id')[0].innerHTML = `<p></p>`
        document.getElementById('add-prd-name').value = "";
        document.getElementById('add-prd-price').value = "";
    } else if (pressedButton == 'btn-cancel-new-prd') {
        newPrdBox.style.display = 'none'
        prdBox.style.height = '440px'
        document.getElementById('add-prd-name').value = "";
        document.getElementById('add-prd-price').value = "";
    }
}

function searchProduct() {
    let prdBox = document.getElementsByClassName("prd-box")[0]
    let searchKey = document.getElementById('search-prd')

    for (let i = 0; i < prdBox.children.length; i++) {
        let searchString = searchKey.value.toString().toUpperCase();
        let productString = prdBox.children[i].children[1].children[0].innerText.toString()

        if (searchString == "") {
            prdBox.children[i].style.display = 'flex';
        } else if (productString.includes(searchString)) {
            prdBox.children[i].style.display = 'flex';
        } else {
            prdBox.children[i].style.display = 'none';
        }
    }
}
function qtyChange(qtyBtn, prdNumber) {
    let cartBoxPrd = document.getElementsByClassName('cart-box')[0].querySelector('#' + prdNumber)
    let qty = cartBoxPrd.children[2].children[1]
    let newQTY;
    if (qtyBtn == 'add-to-cart') {
        newQTY = parseInt(qty.innerHTML) + 1
        if (newQTY < 10)
            qty.innerHTML = "0".concat(newQTY)
        else
            qty.innerHTML = newQTY
    } else if (qtyBtn == 'remove-from-cart') {
        if (qty.innerHTML > 0) {
            newQTY = parseInt(qty.innerHTML) - 1
            if (newQTY < 10)
                qty.innerHTML = "0".concat(newQTY)
            else
                qty.innerHTML = newQTY
        }
    }
}

function addToCart(id) {
    let prdBox = document.getElementsByClassName("prd-box")[0]
    let cardBox = document.getElementsByClassName('cart-box')[0]

    let productToBeCarted = prdBox.children[id]


    if (matchWithCart(productToBeCarted.children[1].children[0].innerHTML)) {
        cardBox.innerHTML += `<div class="prd cart" id="c${cartCounter}">
                <div class="cart-name"><p>${productToBeCarted.children[1].children[0].innerHTML}</p></div>
                <div class="cart-price"><p>${productToBeCarted.children[2].children[0].innerHTML}</p></div>
                <div class="cart-qty">
                  <img
                    id="remove-from-cart"
                    src="/images/icons8_minus_60px.png"
                    alt="BUY"
                    style="display: inline-block"
                    onclick="qtyChange('remove-from-cart', 'c${cartCounter}')"
                  />
                  <button style="display: inline-block" class="qty" id="${cartCounter}">01</button>
                  <img
                    id="add-to-cart"
                    src="/images/icons8_Plus_60px.png"
                    alt="BUY"
                    style="display: inline-block"
                    onclick="qtyChange('add-to-cart', 'c${cartCounter}')"
                  />
                </div>
                <div class="cart-remove" onclick="removeFromCart('c${cartCounter}')">
                  <img
                    id="add-to-cart"
                    src="/images/icons8_xbox_x_60px.png"
                    alt="BUY"
                  />
                </div>
              </div>`
        cartCounter++
    }
}
function matchWithCart(prdName) {
    let cartBox = document.getElementsByClassName("cart-box")[0]

    for (let i = 0; i < cartBox.children.length; i++) {
        let cartItemName = cartBox.children[i].children[0].innerText.toString()
        if (cartItemName == prdName) {
            qtyChange('add-to-cart', cartBox.children[i].id)
            return false
        }
    }
    return true
}
function removeFromCart(productToBeRemovedFromCart) {
    let cartBoxPrd = document.getElementsByClassName('cart-box')[0]
    cartBoxPrd.removeChild(cartBoxPrd.querySelector('#' + productToBeRemovedFromCart))
}
