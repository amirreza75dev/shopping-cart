export const cartReducer = (state,action)=>{
    if(action.type ==="add-to-cart"){
        return {...state , cart : [...state.cart , {...action.payload , qty : 1}]}
    }
    if(action.type ==="remove-from-cart"){
        return {...state , cart : state.cart.filter((p)=> p.id !== action.payload)}
    }
    if(action.type ==="option-value"){
        return {...state , cart : state.cart.filter((p)=> p.id === action.payload.id ? p.qty = action.payload.qty :  p.qty)}
    }
    



    
}


export const productReducer = (state, action)=>{

    if(action.type ==="sort"){

        return {...state, value: action.payload}
    }
    if(action.type ==="fast"){

        return {...state , fastDelivery :true}
    }
    if(action.type ==="stock"){
        return {...state , stock: true}
    }
    if(action.type ==="star"){
        return {...state , star: action.payload}
    }
    if(action.type ==="search"){
        return {...state , search: action.payload}
    }
    if(action.type ==="clear"){
        return {...state , value:false, fastDelivery :false, stock: false,search:"",star:0}
    }





}