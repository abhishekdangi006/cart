import { createContext, useContext } from "react";
import { useState } from 'react';
import CartModal from "./components/CartModal"



export const itemContext =  createContext();

export const useValue = () => {
    return useContext(itemContext);
}



const ItemContext = ({children}) => {
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showcard, setshowcard] = useState(false);
    const [cart, setCart] = useState([]);

    const handleAdd = (prod) => {
        const index = cart.findIndex((item) => item.id === prod.id);
        if(index === -1){
          setCart([...cart, {...prod, qty: 1}]);
        }else{
          cart[index].qty++;
          setCart(cart);
        }
        setTotal(total + prod.price);
        setItem(item+1);
        console.log(cart);
      };
    
      const handleRemove = (i) => {
        if(cart[i].qty >= 1){
          cart[i].qty--;
          setTotal(total-cart[i].price);
          setItem(item-1);
          if(cart[i].qty == 0){
            cart.splice(i,1);
          }
        }
        setCart(cart);
      };

      const handleReset = () => {
          setItem(0);
          setTotal(0);
      }

      const toggle = () => {
          setshowcard(!showcard);
      }

      const clear = () => {
        setCart([]);
        setTotal(0);
        setItem(0);
      }

    return (
        <itemContext.Provider value={{total, item,cart, handleRemove, handleReset, handleAdd, toggle, clear}}>
          {showcard && <CartModal/>}
            {children}
        </itemContext.Provider>
    )
}

export default ItemContext;