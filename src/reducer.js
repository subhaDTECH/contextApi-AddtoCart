export const reducer=(state,action)=>{
   if(action.type==="REMOVE_ITEM"){
       //get all value of state  
       //just update item
       return {
           ...state,
           item:state.item.filter((curEle)=>{
               return curEle.id !==action.payload;
           })
       }
   }
   if(action.type==="REMOVE_ALL"){
        //get all value of state  
       //just update item
       return {
           ...state,
           item:[]
       }
   }
    //inecrement quantity of product
   if(action.type==="ADD"){
     
          let updatecart= state.item.map((curEle)=>{
                if(curEle.id===action.payload){
                      //curEle er ja ache tai only update in quantity
                    return {
                        ...curEle,
                        quantity:curEle.quantity+1,
                    }
                }
                //this return is used  for map function
                return curEle;
            });
            return {...state,item:updatecart}

       
   }
   //drecrement quantity of product
   if(action.type==="SUB"){
       let updateCart=state.item.map((curEle)=>{
           if(curEle.id===action.payload){
               //curEle er ja ache tai only update in quantity
               return {...curEle,quantity:curEle.quantity-1}
           }
            //this return is used  for map function
           return curEle;
       })
       return {...state,item:updateCart}
   }


   //get total item
   if(action.type==="GET_TOTAL"){
      //totalItem spelling should be same in palce 
    let  totalItem=  state.item.reduce((accum,Curval)=>{
           let {quantity}=Curval;
           accum.totalItem +=quantity;
           return accum;

       },{ totalItem:0});
       return {...state,totalItem};
   }
   

//get total  amount
   if(action.type==="GET_TOTAL_ALL"){
       let totalAmount=state.item.reduce((accum,Curval)=>{
           let {quantity,price}=Curval;
           accum.totalAmount+= (quantity*price);
           return accum;
       },{totalAmount:0})
      return {...state,totalAmount};
   }
   



   //when none of the condition true then return state 
   return state;

}