import ReactStars from "react-rating-stars-component";
import {useGlobalContext} from './context'
const Filter = () => {
    const {productDispatch,productFilter} =useGlobalContext()

    const ratingChanged = (newRating) => {
        console.log(newRating);
        productDispatch({type:"star", payload:newRating})
      };
       
    return ( 
        <div className="filter">
            <h1>جستجو پیشرفته</h1>
            <div className="sort">
                <label htmlFor="asc">قیمت کمتر به بیش تر</label>
                <input name="sort" type ="radio" id="asc" onChange={()=> productDispatch({type:"sort", payload: "asc"})} checked={productFilter.value == "asc" ? true : false} />
            </div>
            <div className="sort-dec">
             <label htmlFor="dec">قیمت بیشتر به کمتر</label>
                <input name="sort" type ="radio" id="dec" onChange={()=> productDispatch({type:"sort", payload: "dec"})} checked={productFilter.value == "dec" ? true : false} />
            </div>
            <div className="fast">
                <label htmlFor="fast">ارسال سریع</label>
                <input type="checkbox" id="fast" name="fast" onChange={()=> productDispatch({type:"fast"})} checked={productFilter.fastDelivery}/>
            </div>
            <div className="stock">
                <label htmlFor="stock"> شامل کالاهای ناموجود</label>
                <input type="checkbox" id="stock" name="fast" onChange={()=> productDispatch({type:"stock"})} checked={productFilter.stock}/>
            </div>
            <div className="rating">
                <span>امتیاز</span>
                                <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                edit={true}
                                value={0}
                                />


            </div>
            <div className="clear-filter">
                <button onClick={()=>productDispatch({type:"clear"})}>تنظیمات اولیه</button>

            </div>
            
            
        </div>
     );
}
 
export default Filter;