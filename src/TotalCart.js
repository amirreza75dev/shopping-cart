import {useGlobalContext} from './context'
import ReactStars from "react-rating-stars-component";
import {AiOutlineShoppingCart,AiFillDelete} from 'react-icons/ai'
import { useEffect, useReducer, useState } from 'react';

const TotalCart = () => {
    const {state,dispatch} = useGlobalContext()

    const [totalPrice,setTotalPrice] = useState("")
    useEffect(()=>{
        

        setTotalPrice(state.cart.reduce((sum,cur)=>{ 

             return sum + ( parseInt(cur.price)) * cur.qty ;
        }, 0))
    }
    , [state.cart])

    const optionHandler = (e,item)=>{
        
        console.log(e.target.value);

        dispatch({type : "option-value" , payload :{id: item.id, qty: e.target.value}})


    }
    console.log(totalPrice);
    return ( 
        <div className="total-cart">
            <div className="total-sidebar">
                <h1> مجموع خرید</h1>
                <div className="total-price"><span>مجموع:</span> {`${totalPrice} دلار`}<span></span></div>


            </div>
            <div className="total-main">

                {
                    state.cart.map((item)=>{
                        return(
                            <div className="total-items" key={item.id}>
                                <img src={item.image} alt=""/>
                                <p>{`${item.price} $`}</p>
                                <ReactStars
                                count={5}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                                color="gray"
                                value = {item.ratings}
                               />
                               <select  onChange= {(e)=>{optionHandler(e,item)}}>
                                   {[...Array(item.inStock)].map((arr,index)=>{
                                       return (
                                           <option value={index+1}  key={index}>{index+1}</option>
                                       )

                                   })
                                   }
                               </select>
                               <AiFillDelete className="delete-item"  onClick={()=>dispatch({type: "remove-from-cart", payload: item.id})}/>





                            </div>
                        )



                    })
                }

            </div>

        </div>
     );
}
 
export default TotalCart;