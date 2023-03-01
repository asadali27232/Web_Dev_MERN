import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CRUD.css'

function CRUD() {
    const addNewProduct = () => {
        alert("Product added")
    }
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
                                        onClick={addNewProduct}
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
                                <div class="prd-buy"><p>EDIT</p></div>
                                <div class="prd-buy"><p>DELETE</p></div>
                            </div>
                            <div class="prd-box">
                                <div class="prd">
                                    <div class="prd-id"><p>PRD101</p></div>
                                    <div class="prd-name"><p>DUMMY PRD</p></div>
                                    <div class="prd-price"><p>RS 700</p></div>
                                    <div class="prd-buy">
                                        <img
                                            id="0"
                                            src="images/icons8_edit_48px.png"
                                            alt="BUY"
                                        />
                                    </div>
                                    <div class="prd-buy">
                                        <img
                                            id="0"
                                            src="images/icons8_cancel_64px.png"
                                            alt="BUY"
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