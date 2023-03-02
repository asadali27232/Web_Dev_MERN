import React, { useState, useEffect } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CRUD.css'

function CRUD() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/product/getProduct')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const [prdID, setPrdID] = useState(1000);
    const [prdName, setPrdName] = useState('');
    const [prdPrice, setPrdPrice] = useState('');

    const handleNameChange = (event) => {
        setPrdName(event.target.value);
    };
    const handlePriceChange = (event) => {
        setPrdPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/product/addProduct', { prdID, prdName, prdPrice })
            .then((response) => {
                alert('Product added successfully!');
                console.log(response)
                setPrdName('');
                setPrdPrice('');
                setPrdID(prdID + 1)
            })
            .catch((error) => {
                console.error('Error adding product:', error);
            });
    }
    const editPrd = () => {
        alert("Product edited")
    }
    const deletePrd = () => {
        alert("Product deleted")
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-content-center">
                <div className="col-5 m-2 p-3 pt-0" id="prd-sec">
                    <div className="top-title"><h4>Products</h4></div>
                    <div className="product-container">
                        <div className="adding-prd" id="new-prd-box">
                            <div className="adding-new-prd-top"><h4>Adding New Product</h4></div>
                            <div className="new-prd-id"></div>
                            <form onSubmit={handleSubmit}>
                                <div className="new-prd-name">
                                    <input
                                        type="text"
                                        id="add-prd-name"
                                        name='prdName'
                                        placeholder="New Product Name"
                                        value={prdName}
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className="new-prd-price">
                                    <input
                                        type="text"
                                        id="add-prd-price"
                                        name='prdPrice'
                                        placeholder="New Product Price"
                                        value={prdPrice}
                                        onChange={handlePriceChange}
                                    />
                                </div>
                                <div className="add-prd">
                                    <button
                                        id="btn-add-new-prd"
                                        className="btn-add-product"
                                        type='submit'
                                    >
                                        ADD
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-6 m-2 p-3 pt-0" id="prd-sec">
                    <div className="product-container">

                        <div className="prd-header">
                            <div className="prd-id"><p>ID</p></div>
                            <div className="prd-name"><p>NAME</p></div>
                            <div className="prd-price"><p>PRICE</p></div>
                            <div className="prd-buy"><p>EDIT</p></div>
                            <div className="prd-buy"><p>DELETE</p></div>
                        </div>
                        <div className="prd-box">
                            {products.map((product) => (
                                <div key={product.prdID} className="prd">
                                    <div className="prd-id">
                                        <p>{product.prdID}</p>
                                    </div>
                                    <div className="prd-name">
                                        <p>{product.prdName}</p>
                                    </div>
                                    <div className="prd-price">
                                        <p>{product.prdPrice}</p>
                                    </div>
                                    <div
                                        className="prd-buy"
                                        onClick={editPrd}
                                    >
                                        <img
                                            id="0"
                                            src="images/icons8_edit_48px.png"
                                            alt="BUY"
                                        />
                                    </div>
                                    <div
                                        className="prd-buy"
                                        onClick={deletePrd}
                                    >
                                        <img
                                            id="0"
                                            src="images/icons8_xbox_x_60px.png"
                                            alt="BUY"
                                        />
                                    </div>
                                </div>
                            ))}
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CRUD