import { useCart } from '@/utils/CartContext';
import React, { useEffect, useState } from 'react'


const cart = () => {
  const { cart, removeFromCart } = useCart();
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total based on the selected quantities
    let newTotal = 0;
    cart.forEach((item) => {
      const quantity = selectedQuantities[item.id] || 1;
      newTotal += item.new_price * quantity;
    });
    setTotal(newTotal);
  }, [cart, selectedQuantities]);

  const handleQuantityChange = (itemId, event) => {
    const newQuantities = { ...selectedQuantities, [itemId]: parseInt(event.target.value) || 1 };
    setSelectedQuantities(newQuantities);
  };

  const removeCart = (item) => {
    removeFromCart(item);
  };
    
  return (
    <> 
    <div id="cartitems" className='mx-24 mt-10'>
        <div id="cart-item-format-main" className='grid grid-cols-6 items-center gap-20 px-5  text-gray-600 font-semibold text-base'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div> 
        <hr className='h-1 bg-gray-300 border-0 rounded mt-5'/>
        {cart.map((item,index)=>(
            
            <div>
            <div id="cart-item-format" key={index} className='grid grid-cols-6 items-center gap-20 px-5  text-gray-600 font-semibold text-base mt-5'>
                <img src={item.image.src} alt="" id='carticon-producticon'/>
                <p>{item.name}</p>
                <p>Rs{item.new_price}</p>
                <select name="" id="" value={selectedQuantities[item.id] || 1} onChange={(e) => handleQuantityChange(item.id, e)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <p>{item.new_price * (selectedQuantities[item.id] || 1)}</p>
                <img src="/Assets/x-solid.svg" onClick={() => removeCart(item)} alt="X" className='w-4 h-4 cursor-pointer hover:animate-bounce'/>
            </div>
        </div>
        ))}
        <div id="cartitem-down" className='flex mx-24 w-full mt-7'>
            <div id="total" className='flex-1 flex flex-col mr-4 gap-8 w-4/5'>
                <h1 className='text-4xl'>Cart Totals</h1>
                <div>
                    <div id="total-items" className='flex justify-between px-4 items-center'>
                        <p>SubTotal</p>
                        <p>₹{total}</p>
                    </div>
                    <hr />
                    <div id="total-items2" className='flex justify-between px-4 items-center'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div id="toatl-item3" className='flex justify-between px-4 items-center'>
                        <h3>Total</h3>
                        <h3>₹{total}</h3>
                    </div>
                </div>
                <button className=" h-14 outline-none bg-red-400 text-white border rounded-full text-lg cursor-pointer w-80">PROCEED TO CHECKOUT</button>
            </div>
            <div id="promo-code" className='flex-1 text-base font-medium mt-7 flex items-center justify-center flex-col'>
                <p>If you have a promo code, Enter it here</p>
                <div id="promobox" className='flex justify-center items-center'>
                    <input type="text" placeholder='promocode' className='border-2 w-full h-12 flex justify-center items-center shadow-xl mt-4 rounded-xl'/>
                    <button className=" h-10 outline-none bg-red-400 text-white border rounded-full text-lg cursor-pointer w-32 mt-4 ml-3">Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default cart