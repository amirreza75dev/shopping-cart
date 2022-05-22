import {useGlobalContext} from './context'
import ReactStars from "react-rating-stars-component";
import { useRef, useState } from 'react';

const Items = () => {

    const {state,dispatch,productFilter} = useGlobalContext();

    const sortedProducts = ()=>{
        let sortedProducts = state.products
        if(productFilter.value){
            sortedProducts = sortedProducts.sort((a,b)=>
                productFilter.value ==="dec" ? b.price - a.price : a.price - b.price
            )
        }
       if (productFilter.fastDelivery) {
        sortedProducts = sortedProducts.filter(item=> item.fastDelivery)
       }
       if (!productFilter.stock) {
        sortedProducts = sortedProducts.filter(item=> item.inStock)
       }
       if(productFilter.star){
        sortedProducts = sortedProducts.filter(item=> item.ratings >= productFilter.star)
       }
       if(productFilter.search){
        sortedProducts = sortedProducts.filter(item=> item.name.toLowerCase().includes(productFilter.search))
       }

       return sortedProducts
    }

    
    console.log(state);

    return ( 
        <div className="items">
            {
                sortedProducts().map((item)=>{

                    return(
                        <div className="product" key={item.id}>
                            <img src={item.image} alt=""/>
                            <h1>{item.name}</h1>
                            <p>{`${item.price} $`}</p>
                            {item.fastDelivery ? <p>ارسال سریع</p>: <p>ارسال در 4 روز کاری</p>}
                            <ReactStars
                                count={5}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                                color="gray"
                                value = {item.ratings}
                            />
                            {/* {item.inStock > 0 ?
                                <button onClick={()=>itemHandler(item)} ref={button}>اضافه به سبد</button>

                            :
                            <button className="etmam" disabled>اتمام موجودی </button>

                            } */}


                            {state.cart.some((cartItem)=>cartItem.id == item.id)? 
                            <button className="etmam" onClick={()=>dispatch({type: "remove-from-cart",payload : item.id})}> حدف از سبد</button>
                            :
                            <button onClick={()=>dispatch({type: "add-to-cart", payload: item})} disabled={!item.inStock}>{!item.inStock ? "اتمام موجودی": "اضافه به سبد"}</button>
                            }
                            

                        </div>




                    )
                })
            }

        </div>
     );
}
 
export default Items;