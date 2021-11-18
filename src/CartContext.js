import React,{useState,useContext,NavLink,useHistory} from 'react'
import "./CartContext.css"
import Product from "./Product"
import Items from "./Items"
import {Contextcart} from './Cart'
import Navbar from './Navbar'

const CartContext = () => {
    // const [itemsList,setItemsList]=useState(Product)
   
    const {item,totalItem,totalAmount} = useContext(Contextcart)
    console.log("totalitem",totalItem.totalItem)
    console.log('T',totalAmount)
   
    if(item.length==0){
        return (
            <div className="noitem">
                  <h1>Empty Cart!!!!!</h1>
                  <h5>0 Product</h5>
                
                <button>
                    <a href="/">Back Home</a>
                   
                </button>
                  
            </div>
        )
    }
    return (

     
         <div>
           <div className="navbar">
           <Navbar cartItem={totalItem.totalItem} /> 
           </div>
         <h5>You have {totalItem.totalItem} cart in your List</h5>
    <div className="carcontext">
        {
            console.log(totalItem)
        }
         
            {
                item.map((item)=>{
                    return <Items  key={item.id} item={item}/>
                })
            }  
            
        </div>
          <h3>Total : Rs {totalAmount.totalAmount}</h3>
          <button className="btn_odr">Place Order</button>
         </div>
       
    )
}

export default CartContext
