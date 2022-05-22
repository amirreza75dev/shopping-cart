import {createContext, useContext,useReducer} from 'react'
import { faker } from '@faker-js/faker';
import {cartReducer} from './Reducers'
import {productReducer} from './Reducers'


const AppContext = createContext();
faker.seed(99);
const ContextProvider = ({children})=>{
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
      }));
    
      const [state,dispatch] = useReducer(cartReducer,{products : products, cart : []})
      const [productFilter,productDispatch] = useReducer(productReducer, {value :false , fastDelivery: false, stock:false , star: 0, search:""})



    return(

        <AppContext.Provider value={{state,dispatch,productDispatch,productFilter}}>
            {children}
        </AppContext.Provider>
    )




}
const useGlobalContext =()=>{
    return useContext(AppContext);
}


export {ContextProvider,useGlobalContext};