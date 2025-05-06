import { cart } from "../data/cartData";
 export default function updateTotal(totalElement){
    let total=0;
    cart.forEach((item)=>{
        total+= parseFloat(item.price.replace('$', '')) * `${item.quantity}`;

    })
    totalElement.textContent=`Total:$${total.toFixed(2)}`;

}