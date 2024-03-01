import React, { useEffect } from 'react'
import { useState } from 'react'
import './products.css';
import { NavLink } from 'react-router-dom'
import Details from './details';
const Products = ({input, setInput, cartArr, total, setTotal}) => {
    const [data, setData] = useState([])
    

    useEffect(() => {
        async function products() {
            try {
                const res = await fetch('https://fakestoreapi.com/products')

                const productData = await res.json();
                setData(productData)
                setInput('')
            } catch (err) {
                console.log(err)
            }

        }
       
        products()

    }, [])

    function AddRemoveCart (itemID, itemPrice) {
        const index = cartArr.indexOf(itemID);
        (cartArr.includes(itemID)) ? cartArr.splice(index, 1) : 
        cartArr.push(itemID) && setTotal(total + itemPrice )
    }

    if (data.length === 0){
        return <div className='loading'>Loading...</div>
    }

    return (
        <>
        <div className='parent'>

            {
                 data.filter((item) => (
                    item.title.toLowerCase().includes(input)
                )).map((item, index) => (
                    <div key={item.id} className='container'>
                        <img className='img' src={(item.image)}></img>
                        <h4 className='title' key={index} >{item.title}</h4>
                        <p className='price'>${item.price}</p>
                        <div className='btns'>
                            <NavLink to={'/cart'}><button onClick = {() => AddRemoveCart(item.id, item.price)}>
                            {(cartArr.includes(item.id)) ? 'Remove from cart' : 'Add to cart'}

                                </button>
                            </NavLink>
                            <NavLink to={`/details/${item.id}`} ><button>View Details</button></NavLink>
                        </div>
                    </div>

                ))
            }


        </div>

        </>
    )
}



export default Products


//const [title, setTitle] = useState('')
//const [price, setPrice] = useState(0)
//const [description, setDescription] = useState('')
//const [img, setImg] = useState('')