import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Details = ({ cartArr, setCartArr }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Check if product is already fetched and cached
        const cachedProduct = localStorage.getItem(`product_${id}`);
        if (cachedProduct) {
            setProduct(JSON.parse(cachedProduct));
        } else {
            async function fetchProductDetails() {
                try {
                    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                    const productData = await res.json();
                    setProduct(productData);
                    // Cache the fetched product
                    localStorage.setItem(`product_${id}`, JSON.stringify(productData));
                } catch (err) {
                    console.log(err);
                }
            }
            fetchProductDetails();
        }
    }, [id]);

    if (!product) {
        return <div className='loading'>Loading...</div>;
    }

    function AddRemoveCart(itemID) {
        const index = cartArr.indexOf(itemID);
        (cartArr.includes(itemID)) ? cartArr.splice(index, 1) :
            cartArr.push(itemID)
    }

    return (
        <div>
            <div key={product.id} className='container'>
                <img className='img' src={product.image}></img>
                <h4 className='title'>{product.title}</h4>
                <p className='price'>${product.price}</p>
                <div className='btns'>
                    <NavLink to={'/cart'}>
                        <button onClick={() => AddRemoveCart(product.id)}>
                            {(cartArr.includes(product.id)) ? 'Remove from cart' : 'Add to cart'}
                        </button>
                    </NavLink>
                </div>
            </div>
            <p className='description'>{product.description}</p>
        </div>
    )
}

export default Details;
