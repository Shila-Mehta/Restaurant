
import createButton from "./createButton";
import createElement from "./createElement";
import { cart } from "../data/cartData";

export default function createCartItems(title, price, quantity,updateTotal) {
    const cartItem = createElement('div', 'cart-item');

    const itemName = createElement('span', 'item-name', title);
    const itemPrice = createElement('span', 'item-price', price);
    const increase = createButton('+', 'plus btn');
    const itemQuantity = createElement('span', 'item-quantity', quantity);
    const decrease = createButton('-', 'minus btn');
    const remove = createButton('remove', 'remove-btn');

    // Event listener for increasing quantity
    increase.addEventListener('click', () => {
        itemQuantity.textContent = ++quantity;
        cart.get(title).quantity=quantity;
        // Update the cart data here if necessary, by calling a function like updateCart
        updateTotal();
    });

    // Event listener for decreasing quantity
    decrease.addEventListener('click', () => {
        if (quantity > 1) {
            itemQuantity.textContent = --quantity;
            cart.get(title).quantity=quantity;
        }
        // Update the cart data here if necessary
         updateTotal();
    });

    // Event listener for removing item
    remove.addEventListener('click', () => {
        cartItem.remove(); // Removes the item from the cart UI
        cart.delete(title); // Correctly delete the item from the Map
        updateTotal();
      
        
    });

    // Append elements to the cart item
    cartItem.append(itemName, increase, itemQuantity, decrease, itemPrice, remove);

    return cartItem;
}
