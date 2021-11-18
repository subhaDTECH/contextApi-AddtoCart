import React,{useContext} from 'react'
import "./Items.css"
import {Contextcart} from "./Cart"
const Items = ({item}) => {
    const {id,name,title,price,quantity,photo}=item;
    const {removeItem,removeAllItem,Increment,Decrement} = useContext(Contextcart)
    let total=0;
 return (
         
  <div className="items">
    <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img  src={photo}/>
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="price">
            {/* <p> price :{price*quantity}</p> */}
            <p>price:{price}</p>
            <p>Quantity:{quantity}</p>
            <a onClick={()=>removeAllItem(id)} className=" mx-4 waves-effect waves-light btn red">remove All</a>
            <a onClick={()=>removeItem(id)} className=" removebtn waves-effect waves-light btn red">remove</a>
        </div>
        {
            quantity===0 && removeItem(id)
        }
        {
            total=total+(price*quantity)
        }
        <div className="card-action">
         <a onClick={()=>Increment(id)}  className="waves-effect waves-light btn">ADD</a>
         <input  className="item__input" type="text " placeholder={quantity} />
         <a onClick={()=>Decrement(id)} className="waves-effect waves-light btn">SUB</a>
         <a className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">cart</i></a>
        </div>
         {/* <h1>{`Total ${total}`}</h1> */}
        
      </div>
    </div>
  </div>
</div>
    )
}

export default Items
