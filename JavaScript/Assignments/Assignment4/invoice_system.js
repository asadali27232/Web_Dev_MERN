let prdID = 113;
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
                    id="add-to-cart"
                    src="/images/icons8_fast_cart_60px.png"
                    alt="BUY"
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