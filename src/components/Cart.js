import React, { useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {addItem, clearCart, clearItem, removeItem, addCount, reduceCount} from '../store/Actions/actions'


function Cart() {
    // const dispatch = useDispatch();
    const data = useSelector(state => state.Test)
    console.log(data)
    const dispatch = useDispatch()

    const cartItems = [...new Set(data.cartItems)]
    console.log(cartItems)

    //counting items 
      cartItems.forEach(item => (
          item.count = data.cartItems.filter(cartItem => cartItem.bookId === item.bookId).length
      ))
     
    return (
        
        <div className='bg-gray-100'>
           <div className='container mx-auto mt-10'>
            <div className='flex shadow-md my-10'>
                     <div className='flex-1'>
                                {/* <Link to="/shop">Shop</Link>
                            <Link to="/cart">Cart</Link> */}
                        <div className='flex mt-10 mb-2'>
                            <h3 className='font-semibold text-gray-600 text-lg uppercase w-2/5'>Product Details</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-lg uppercase w-1/5'>Quantity</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-lg uppercase w-1/5'>Price</h3>
                            <h3 className='font-semibold text-gray-600 text-center text-lg uppercase w-1/5'>Total</h3>
                        </div>   
                        <div>

                        </div>
                    <div className='px-4 py-2 '>
                    {cartItems.map(item => (
                            <div className='flex flex-grow border-b-2 border-gray-500 py-2'  key={item.bookId}>
                            <div className='flex w-2/5'>
                                <div className='w-20'>
                                    <img className='h-12' src={process.env.PUBLIC_URL + `/${item.url}`} />
                                </div>
                                <div className='w-1/5 flex items-center flex-grow flex-col md:flex-row justify-between'>
                                    <div className=''>
                                      <p className='text-lg'>{item.bookName}</p> 
                                    </div>
                                    <div className=''>
                                    <button onClick={() => dispatch(removeItem(item))} className="bg-red-500 px-2 py-1 text-white text-sm md:text-lg rounded-sm">Remove</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center font-bold w-1/5'>
                                <button className='inline-block px-2 py-2 mx-2 bg-gray-400 text-2xl' onClick={() => dispatch(reduceCount(item))}>-</button>
                                <h2 className='text-xl'>{item.count}</h2>
                                <button className='inline-block px-2 py-2 mx-2 bg-gray-400 text-2xl' onClick={() => dispatch(addCount(item))}>+</button>
                            </div>
                            <div className='w-1/5 flex items-center justify-center'>
                                <p className='text-xl'>$ {item.price}</p>
                            </div>
                            {/* <p>No of items {Ob ject.keys(data.cartItems.find(item.bookId)).length}</p> */}
                            <div className='w-1/5 flex items-center justify-center'>
                                <p className='text-xl'>$ {item.price * item.count}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col items-end space-y-2 ml-4 pb-4'>
                        <h1 className='md:mr-24 mr-10'><span className='text-2xl'>Total Price:</span> <span className='text-xl font-medium'>${data.totalPrice}</span></h1>
                        <button className='mr-10 font-semibold bg-red-500 rounded-sm text-white text-lg px-2 py-1 md:mr-24' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                    </div>
                     </div>
                
            </div>
           </div>
             {/* {<h1 className='font-bold text-lg uppercase text-red-400'>Total Price: {data.totalPrice}</h1>} */}
        </div>
    )
}

export default Cart
