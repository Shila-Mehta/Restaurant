import createElement from "./createElement";
import createImage from "./createImage";

import createCartButton from "./createCardButton";

export default function createCard(src,title,description,price){
 const card=createElement('div','card');

 const img_holder=createElement('div','holder');
  const img=createImage(src,title,'menu-img');
  img_holder.append(img);

     
    // heading
  const heading=createElement('h1','heading',title);
  
   // description
   const description_img=createElement('p','description',description);

   const price_img=createElement('span','price',price);
  
   const button=createCartButton(title,price)
  

     card.append(heading,img_holder,description_img,price_img,button);
     return card;
}


