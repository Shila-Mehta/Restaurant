
import  './styles/about.css';
import  './styles/home.css';
import  './styles/menu.css';
import  './styles/main.css';
import './styles/cart.css';
import './styles/placeOrder.css';

import  {homeTab}  from './pages/home.js';
import  {menuTab} from './pages/menu.js';
import  {aboutTab}  from './pages/about.js';
import  {cartTab}  from  './pages/cart.js';
import { placeOrderTab } from './pages/placeOrder.js';
import { cart } from './data/cartData.js';


const homeElement=homeTab();
const menuElement=menuTab();
const contactElement=aboutTab();
const orderElement=placeOrderTab();




// let currentTab=null;
let currentTab=homeElement;

const homeBtn=document.querySelector('.home-btn');
const menuBtn=document.querySelector('.menu-btn');
const contactBtn=document.querySelector('.about-btn');


const contentContainer=document.querySelector('#content');
// console.log(contentContainer);
contentContainer.appendChild(homeElement);




homeBtn.addEventListener('click',()=>{
    if(currentTab  &&  currentTab!==homeElement){
        contentContainer.removeChild(currentTab);
    }
    contentContainer.innerHTML='';
    contentContainer.append(homeElement);
    currentTab=homeElement;
   
    
})

menuBtn.addEventListener('click',()=>{

    if(currentTab &&  currentTab!==menuElement){
        contentContainer.removeChild(currentTab);
    }
    contentContainer.innerHTML='';
    contentContainer.append(menuElement);
    currentTab=menuElement;

})

contactBtn.addEventListener('click',()=>{
    if(currentTab  &&  currentTab!==contactElement){
        contentContainer.removeChild(currentTab);
    }
    contentContainer.innerHTML='';
    contentContainer.append(contactElement);
    currentTab=contactElement;
})


// when click on logo ,the user redirct to home page
const logo=document.querySelector('.logo');
logo.addEventListener('click',()=>{
    if(currentTab  &&  currentTab!==homeElement){
        contentContainer.removeChild(currentTab);
    }
    contentContainer.innerHTML='';
    contentContainer.append(homeElement);
    currentTab=homeElement;
   
})

const cartBtn = document.querySelector('.addcart-btn');
cartBtn.addEventListener('click', (e) => {
    if (currentTab) {
        contentContainer.removeChild(currentTab);
    }
     contentContainer.innerHTML='';
    const cartElement = cartTab(); 
    contentContainer.append(cartElement);
    currentTab = cartElement;
});



//order btn 
// const orderBtn1=document.querySelector('.order-btn');
// const orderBtn2=document.querySelector('.placed');
// function applyClick(){
//     if(currentTab &&  currentTab!==orderElement){
//         contentContainer.removeChild(currentTab);
//     }
//     contentContainer.innerHTML='';
//     contentContainer.append(orderElement);
//     currentTab=orderElement;
// }
// orderBtn1.addEventListener('click',applyClick);
// orderBtn2.addEventListener('click',applyClick);

document.body.addEventListener('click',(e)=>{
    if(e.target.classList.contains('orderplace')){
        cart.clear();
        if(currentTab &&  currentTab!==orderElement){
                    contentContainer.removeChild(currentTab);
                }
                contentContainer.innerHTML='';
                contentContainer.append(orderElement);
                currentTab=orderElement;

    }
})


// back btn
document.body.addEventListener('click',(e)=>{

    if(e.target.classList.contains('back')){
        // cart.clear();

        if (currentTab) {
            contentContainer.removeChild(currentTab);
        }
         contentContainer.innerHTML='';
        const cartElement = cartTab(); 
        contentContainer.append(cartElement);
        currentTab = cartElement;
    }

})

// when click on cta btn the user redirect to menu page
const ctaButton=document.querySelector('.cta-menu-btn');
ctaButton.addEventListener('click',()=>{
    if(currentTab &&  currentTab!==menuElement){
        contentContainer.removeChild(currentTab);
    }
    contentContainer.innerHTML='';
    contentContainer.append(menuElement);
    currentTab=menuElement;
})