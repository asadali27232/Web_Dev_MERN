import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CRUD.css'

function CRUD() {
    return (
        <>
            <div class="container-fluid">
                <div class="row justify-content-center align-content-center">
                    <div class="col-5 m-2 p-3 pt-0" id="prd-sec">
                        <div class="top-title"><h4>Products</h4></div>
                        <div class="product-container">
                            <div class="adding-prd" id="new-prd-box">
                                <div class="adding-new-prd-top"><h4>Adding New Product</h4></div>
                                <div class="new-prd-id"></div>
                                <div class="new-prd-name">
                                    <input
                                        type="text"
                                        id="add-prd-name"
                                        placeholder="New Product Name"
                                    />
                                </div>
                                <div class="new-prd-price">
                                    <input
                                        type="text"
                                        id="add-prd-price"
                                        placeholder="New Product Price"
                                    />
                                </div>
                                <div class="add-prd">
                                    <button
                                        id="btn-add-new-prd"
                                        class="btn-add-product"
                                        onclick="addNewProduct('btn-add-new-prd')"
                                    >
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 m-2 p-3 pt-0" id="prd-sec">
                        <div class="product-container">

                            <div class="prd-header">
                                <div class="prd-id"><p>ID</p></div>
                                <div class="prd-name"><p>NAME</p></div>
                                <div class="prd-price"><p>PRICE</p></div>
                                <div class="prd-buy"><p>BUY</p></div>
                            </div>
                            <div class="prd-box">
                                <div class="prd">
                                    <div class="prd-id"><p>PRD101</p></div>
                                    <div class="prd-name"><p>CAKE 1 POUND</p></div>
                                    <div class="prd-price"><p>RS 700</p></div>
                                    <div class="prd-buy">
                                        <img
                                            id="0"
                                            src="images/icons8_fast_cart_60px.png"
                                            alt="BUY"
                                            onclick="addToCart('0')"
                                        />
                                    </div>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CRUD