import React, {useState, useEffect} from 'react'
import Products from '../products/products'

const Cart = ({cartArr, setCartArr}) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        async function fetchCart() {
            try {
                const fetchedItems = await Promise.all(cartArr.map(async (id) => {
                    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                    return res.json();
                }));
                setCartItems(fetchedItems);
            } catch (err) {
                console.log(err);
            }
        }
        fetchCart();
    }, [cartArr]);
    
    function removeItem(itemID) {
        const index = cartArr.indexOf(itemID);
        if (index !== -1) { 
            const updatedCartArr = [...cartArr];
           
            updatedCartArr.splice(index, 1);
            setCartArr(updatedCartArr);
        }
    }

  return (
    <div>
      {
          cartItems.map((item) => (
            <div key={item.id}>
                <img className='img' src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
            </div> ))
      }
    </div>
  )
}

export default Cart
