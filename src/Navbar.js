import { useEffect, useState } from 'react';
import {AiOutlineShoppingCart,AiFillDelete} from 'react-icons/ai'
import {AiOutlineDown} from 'react-icons/ai'
import {useGlobalContext} from './context'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [shopping,setShopping] = useState(false)
    const {state,dispatch,productFilter,productDispatch} = useGlobalContext();
    
    const[totalItems,setTotalItems] = useState(0)
    useEffect(()=>{

        setTotalItems(state.cart.reduce((sum,cur)=>{
            return sum + parseInt(cur.qty);
        },0))




    },[state.cart])


    return ( 
        <nav className="nav">
            <div className="nav-container">
                <h2><Link className="home-page" to="/">کارت خرید</Link></h2>
                <input value={productFilter.search} type="text" placeholder="جستجو" onChange={(e)=>productDispatch({type:"search",payload:e.target.value})}/>
                <button > <AiOutlineShoppingCart className="shopping"/> <span>{totalItems}</span> <AiOutlineDown onClick= {()=>setShopping(!shopping)} className="down"/><div className={shopping? "shopping-items show-shopping": "shopping-items"}>{
                    state.cart.map((cartItem,index)=>{
                        return(
                            <div className="shopping-cart" key={index}>
                                <img src={cartItem.image} alt=""/>
                                <div className="shopping-info">
                                    <h6>{cartItem.name}</h6>
                                    <p>{`${cartItem.price}$`}</p>
                                </div>
                                <AiFillDelete className="delete" onClick={()=>dispatch({type: "remove-from-cart", payload: cartItem.id})}/>

                            </div>
                        )
                    })
                }
                <div className="cart-button" onClick={()=>setShopping(false)}>  <Link to="total"> برو به صفحه خرید</Link> </div>
                
                </div></button>
                

            </div>


        </nav>
     );
}
 
export default Navbar;