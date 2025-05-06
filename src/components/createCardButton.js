import createButton from "./createButton";
import { cart } from "../data/cartData";

export default function createCartButton(title, price) {
  const button = createButton('Add to cart', 'cart-btn');

  // Attach dataset for reference if needed elsewhere
  button.setAttribute('data-title', title);
  button.setAttribute('data-price', price);

  // Handle add to cart logic
  button.addEventListener('click', (e) => {
    if (cart.has(title)) {
      const item = cart.get(title);
      item.quantity += 1;
      cart.set(title, item);
    } else {
      cart.set(title, {
        price: price,
        quantity: 1
      });
    }

      
  });

 
  return button;
}
