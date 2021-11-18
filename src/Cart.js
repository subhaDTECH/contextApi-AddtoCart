import React,{createContext,useReducer,useEffect} from 'react'
import CartContext from "./CartContext";
import Product from "./Product"
import {reducer} from './reducer'


export const Contextcart=createContext();
//create initial state 
// give it initai item 
//totalAmoutn
//totalitem
const initialState={
    item:Product,
    totalAmount:0,
    totalItem:0,
}
const Cart = () => {
    
  
    const [state, dispatch] = useReducer(reducer, initialState)
    const removeItem=(id)=>{
        return (
            dispatch({
                type:"REMOVE_ITEM",
                payload:id,
            })
        )

    }
    const removeAllItem=(id)=>{
        return (
            dispatch({
                type:"REMOVE_ALL",
                payload:id,
            })
        )
    }
    const Increment=(id)=>{
        return (
            dispatch({
                type:"ADD",
                payload:id
            })
        )
    }
    const Decrement=(id)=>{
        return (
            dispatch({
                type:"SUB",
                payload:id
            })
        )
           
        
    }


    //when  state item means quantity of item change it will fire
    useEffect(()=>{
        dispatch({
            type:"GET_TOTAL"
        })

    },[state.item])
  


    // //when  state item means quantity of item change it will fire
    useEffect(()=>{
        dispatch({
            type:"GET_TOTAL_ALL"
        })

    },[state.item])
   
    return (
        <div className="cart">
        <div className="container">
          {/* pass state and all the function so that we can use it anywhere */}
        <Contextcart.Provider  value={{...state,removeItem,removeAllItem,Increment,Decrement}}>
         <CartContext/>
        </Contextcart.Provider>
           
       </div>
        </div>
    )
}

export default Cart
