import createElement from "../components/createElement";
import createImage from "../components/createImage";
import truckIcon from '../assets/truck.png';
import createButton from "../components/createButton";


export const  placeOrderTab=()=>{
    const orderContainer=createElement('div','order-container');
    const messageContainer=createElement('div','msg-container');
    const headline=createElement('h1','order-headline','Order Details');
    const iconHolder=createElement('div','icon-container');
    const placeOrderIcon=createImage(truckIcon,'','order-icon');
    iconHolder.appendChild(placeOrderIcon);
    const msg=createElement('div','message','The order has been placed');
    messageContainer.append(iconHolder,msg);
    const backBtn=createButton('Back to Cart','back');
    orderContainer.append(headline,messageContainer,backBtn);

   return orderContainer;
}