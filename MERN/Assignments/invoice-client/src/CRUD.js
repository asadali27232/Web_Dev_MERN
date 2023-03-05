import React, { useState, useEffect } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import "./CRUD.css"

function CRUD() {
    const [products, setProducts] = useState([])
    const [prd_id, setPrd_id] = useState("")
    const [hide, setHide] = useState(true)
    const handleGet = () => {
        axios
            .get("http://localhost:3001/product/getProduct")
            .then((response) => {
                setProducts(response.data)
            })
            .catch((error) => {
                alert(`Error fetching products: ${error}`)
            })
    }
    useEffect(() => {
        handleGet()
    }, [])

    const [prdID, setPrdID] = useState(1001)
    const [prdName, setPrdName] = useState("")
    const [prdPrice, setPrdPrice] = useState("")

    const handleNameChange = (event) => {
        setPrdName(event.target.value)
    }
    const handlePriceChange = (event) => {
        setPrdPrice(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (prdName === "" || prdPrice === "") return
        else if (prdName.indexOf(" ") <= 0 || prdName.indexOf(" ") <= 0) {
            setPrdName("")
            setPrdPrice("")
            return
        }
        axios
            .post("http://localhost:3001/product/addProduct", {
                prdID,
                prdName,
                prdPrice,
            })
            .then((response) => {
                handleGet()
                setPrdName("")
                setPrdPrice("")
                setPrdID(prdID + 1)
            })
            .catch((error) => {
                alert(`Error adding product: ${error}`)
            })
    }
    const handleEdit = (product) => {
        setPrd_id(product._id)
        setPrdID(product.prdID)
        setPrdName(product.prdName)
        setPrdPrice(product.prdPrice)
        setHide(false)
    }
    const edit = (event) => {
        event.preventDefault()
        axios
            .put(`http://localhost:3001/product/updateProduct/${prd_id}`, {
                prdID,
                prdName,
                prdPrice,
            })
            .then((response) => {
                handleGet()
                setTimeout(() => {
                    alert(`Product updated successfully having ID ${prdID}`)
                }, 100)
                setPrdName("")
                setPrdPrice("")
            })
            .catch((error) => {
                alert(`Error adding product: ${error}`)
            })
        setHide(true)
    }
    const handleDelete = (product) => {
        const url = `http://localhost:3001/product/deleteProduct/${product._id}`
        axios
            .delete(url)
            .then((response) => {
                handleGet()
            })
            .catch((error) => {
                alert(`Error deleting product: ${error}`)
            })
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-content-center">
                <div className="col-5 m-2 p-3 pt-0" id="prd-sec">
                    <div className="top-title">
                        <h4>Products</h4>
                    </div>
                    <div className="product-container">
                        <div className="adding-prd" id="new-prd-box">
                            <div className="adding-new-prd-top">
                                <h4>Adding New Product</h4>
                            </div>
                            <div className="new-prd-id"></div>
                            <form>
                                <div className="new-prd-name">
                                    <input
                                        type="text"
                                        id="add-prd-name"
                                        name="prdName"
                                        placeholder="New Product Name"
                                        value={prdName}
                                        onChange={handleNameChange}
                                    />
                                </div>
                                <div className="new-prd-price">
                                    <input
                                        type="text"
                                        id="add-prd-price"
                                        name="prdPrice"
                                        placeholder="New Product Price"
                                        value={prdPrice}
                                        onChange={handlePriceChange}
                                    />
                                </div>
                                <div className="add-prd">
                                    <button
                                        id="btn-add-new-prd"
                                        className={
                                            !hide ? "hide" : "btn-add-product"
                                        }
                                        onClick={handleSubmit}
                                    >
                                        ADD NEW
                                    </button>
                                    <button
                                        id="btn-add-new-prd"
                                        className={
                                            hide ? "hide" : "btn-add-product"
                                        }
                                        onClick={edit}
                                    >
                                        EDIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-6 m-2 p-3 pt-0" id="prd-sec">
                    <div className="product-container">
                        <div className="prd-header">
                            <div className="prd-id">
                                <p>ID</p>
                            </div>
                            <div className="prd-name">
                                <p>NAME</p>
                            </div>
                            <div className="prd-price">
                                <p>PRICE</p>
                            </div>
                            <div className="prd-buy">
                                <p>EDIT</p>
                            </div>
                            <div className="prd-buy">
                                <p>DELETE</p>
                            </div>
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
                                        onClick={() => handleEdit(product)}
                                    >
                                        <img
                                            id="0"
                                            src="images/icons8_edit_48px.png"
                                            alt="BUY"
                                        />
                                    </div>
                                    <div
                                        className="prd-buy"
                                        onClick={() => handleDelete(product)}
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
