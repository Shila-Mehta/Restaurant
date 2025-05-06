import createElement from "../components/createElement";
import createCartItems from "../components/creatCartItems";
import createButton from "../components/createButton";
import { cart } from "../data/cartData";
import updateTotal from "../components/updateTotal";

export  const cartTab= function (){
    const cartContainer=createElement('div','cart-container');
    const cartHeadline=createElement('h1','cart-heading','Your cart');
    cartContainer.append(cartHeadline);
    const totalElement=createElement('div','cart-total',`Total:${0}`);


   
    cart.forEach((item, title) => {
        const cartItem = createCartItems(title, item.price, item.quantity,() => updateTotal(totalElement));
        cartContainer.append(cartItem);
    });

    updateTotal(totalElement); // set initail value


    const placeOrderBtn=createButton('Place Order','placed orderplace');
    // placeOrder(placeOrderBtn);
    cartContainer.append(totalElement,placeOrderBtn);
   
    return cartContainer;
}





