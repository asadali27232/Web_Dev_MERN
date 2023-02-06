let prdID = 113;
let cartCounter = 0;
setInvoiceNumber();
// Setting Date and Time on Invoice
setInterval(() => {
    let d = new Date()

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let ap = "am";
    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12
        ap = "pm"
    }

    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }

    if (s < 10) {
        s = "0" + s
    }

    document.getElementById('date').innerText = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()} ${h}:${m}:${s}${ap}`
}, 1000)

function addNewProduct(pressedButton) {
    let newPrdBox = document.getElementById("new-prd-box");
    let prdBox = document.getElementsByClassName("prd-box")[0];

    if (pressedButton == 'btn-add-product') {
        document.getElementsByClassName('new-prd-id')[0].innerHTML = `<p>New Product ID: PRD${prdID}</p>`
        newPrdBox.style.display = 'block'
        prdBox.style.height = '35.5vh'
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
                    src="images/icons8_fast_cart_60px.png"
                    alt="BUY"
                    onclick="addToCart('${prdID - 101}')"
                  />
                </div>`;
        prdID = prdID + 1;
        newPrdBox.style.display = 'none'
        prdBox.style.height = '65vh'
        document.getElementsByClassName('new-prd-id')[0].innerHTML = `<p></p>`
        document.getElementById('add-prd-name').value = "";
        document.getElementById('add-prd-price').value = "";
    } else if (pressedButton == 'btn-cancel-new-prd') {
        newPrdBox.style.display = 'none'
        prdBox.style.height = '65vh'
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
        if (qty.innerHTML == 1) {
            removeFromCart(prdNumber)
        }
        if (qty.innerHTML > 0) {
            newQTY = parseInt(qty.innerHTML) - 1
            if (newQTY < 10)
                qty.innerHTML = "0".concat(newQTY)
            else
                qty.innerHTML = newQTY
        }
    }
    billing()
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
                    src="images/icons8_minus_60px.png"
                    alt="BUY"
                    style="display: inline-block"
                    onclick="qtyChange('remove-from-cart', 'c${cartCounter}')"
                  />
                  <button style="display: inline-block" class="qty" id="${cartCounter}">01</button>
                  <img
                    id="add-to-cart"
                    src="images/icons8_Plus_60px.png"
                    alt="BUY"
                    style="display: inline-block"
                    onclick="qtyChange('add-to-cart', 'c${cartCounter}')"
                  />
                </div>
                <div class="cart-remove" onclick="removeFromCart('c${cartCounter}')">
                  <img
                    id="add-to-cart"
                    src="images/icons8_xbox_x_60px.png"
                    alt="BUY"
                  />
                </div>
              </div>`
        cartCounter++
    }
    billing()
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
    billing()
}
function emptyCart() {
    document.getElementsByClassName("cart-box")[0].innerHTML = ``
    billing()
}
function billing() {
    let cartBox = document.getElementsByClassName('cart-box')[0]
    let billBox = document.getElementsByClassName('bill-box')[0]
    billBox.children[1].innerHTML = ""

    const gst = []
    const amount = []

    for (let i = 0; i < cartBox.children.length; i++) {
        gst[i] = parseFloat(parseFloat(cartBox.children[i].children[1].innerText.slice(3)) * parseFloat(cartBox.children[i].children[2].children[1].innerText) * .17).toFixed(2)

        amount[i] = parseFloat(parseFloat(gst[i]) + (parseFloat(cartBox.children[i].children[2].children[1].innerText) * parseFloat(cartBox.children[i].children[1].innerText.slice(3)))).toFixed(2)

        billBox.children[1].innerHTML += `<div class="table-row">
                <p class="smaller left">${cartBox.children[i].children[0].innerText}</p>
                <p class="smaller">${cartBox.children[i].children[2].children[1].innerText}</p>
                <p class="smaller">${cartBox.children[i].children[1].innerText.slice(3)}</p>
                <p class="smaller">17.00%</p>
                <p class="smaller">${gst[i]}</p>
                <p class="smaller right">${amount[i]}</p>
              </div>`
    }

    let totalGst = 0.0;
    gst.forEach(element => {
        totalGst += parseFloat(element)
    });
    let totalAmount = 0.0;
    amount.forEach(element => {
        totalAmount += parseFloat(element)
    });
    let discount = document.getElementById('input-discount').value
    if (discount == '') {
        discount = 0;
    }
    let received = document.getElementById('input-received').value
    if (received == '') {
        received = 0;
    }
    document.getElementById('invoice-total').innerText = (totalAmount - totalGst).toFixed(2)

    document.getElementById('total-gst').innerText = totalGst.toFixed(2)

    document.getElementById('total-amount').innerText = (((totalAmount - totalGst) - ((totalAmount - totalGst) * (parseFloat(discount) / 100.0))) + totalGst).toFixed(2)

    document.getElementById('discount-amount').innerText =
        `${((totalAmount - totalGst) * (parseFloat(discount) / 100.0)).toFixed(2)} (${discount}%)`

    document.getElementById('amount-after-disc').innerText =
        ((totalAmount - totalGst) - ((totalAmount - totalGst) * (parseFloat(discount) / 100.0))).toFixed(2)

    document.getElementById('received').innerText = received

    document.getElementById('cust-balance').innerText = (parseInt(received) - (((totalAmount - totalGst) - ((totalAmount - totalGst) * (parseFloat(discount) / 100.0))) + totalGst)).toFixed(2)

    document.getElementById('input-balance').value = (parseInt(received) - (((totalAmount - totalGst) - ((totalAmount - totalGst) * (parseFloat(discount) / 100.0))) + totalGst)).toFixed(2)

    document.getElementById('input-receivable').value = (((totalAmount - totalGst)
        - ((totalAmount - totalGst) * (parseFloat(discount) / 100.0))) + totalGst).toFixed(2)

    document.getElementById('grand-total').innerText = (((totalAmount - totalGst) - ((totalAmount - totalGst) * (parseFloat(discount) / 100.0))) + totalGst).toFixed(2)
}
function printInvoice() {
    let prtContent = document.getElementsByClassName('invoice-container')[0];
    let WinPrint = window.open('', 'Print Invoice', 'left=0,top=0,width=1200,height=900,toolbar=0,scrollbars=0,status=0');
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.getElementsByTagName('head')[0].innerHTML =
        `<style>
            * {
            padding: 0;
            margin: 0;
            }
            p {
                color: blue;
            }
            body {
            width: 300px;
            padding: 10px;
            font-family: Helvetica, sans-serif;
            }
            .logo-container {
            display: flex;
            justify-content: center;
            margin-top: 15px;
            }
            .logo {
            width: 120px;
            }
            .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            }
            #bill-sec p {
            padding: 0;
            margin: 0;
            color: blue;
            width: fit-content;
            }
            .smaller {
            font-size: 10px;
            }
            .small {
            font-size: 12px;
            }
            .bold {
            font-weight: 600;
            }
            .top {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: auto;
            }
            .table {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            }
            .table-row {
            display: grid;
            grid-template-rows: auto;
            align-items: center;
            justify-items: center;
            grid-template-columns: 3fr 0.5fr 1fr 1fr 1fr 1fr;
            }
            .left {
            justify-self: left;
            }
            .right {
            justify-self: right;
            }
            .line {
            border-top: 1px solid blue;
            margin-top: 1px;
            }
            .row2 {
            display: flex;
            justify-content: space-between;
            }
            .thanks {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: fit-content;
            padding: 10px 0px;
            margin: 0px;
            align-items: center;
            }
            .thanks .line {
            width: 100%;
            margin: 5px 0px;
            border-top: 1px dotted blue;
            }
        </style>`
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    setInvoiceNumber();
    document.getElementById('input-discount').value = ""
    document.getElementById('input-received').value = ""
    document.getElementById('input-balance').value = ""
    document.getElementById('input-receivable').value = ""
    emptyCart()
}
function setInvoiceNumber() {
    let d = new Date()
    document.getElementById('invoice-number').innerHTML =
        `<span class="bold">Invoice #</span> ${d.getFullYear()}${d.getMonth()}${d.getDate()}${d.getHours()}${d.getMinutes()}${d.getHours()}`
}


