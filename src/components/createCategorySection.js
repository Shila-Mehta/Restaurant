 import createElement from "./createElement";
 import createCard from "./createCard";

export default  function createCategorySection(category,items){

    const categorySection=createElement('div','category-section');
    const categoryHeading=createElement('h2','category-heading',category);
    const cardsWrapper=createElement('div','cards-grid');

       items.forEach((item)=>{
        const card=createCard(item.src,item.title,item.description,item.price);
        cardsWrapper.append(card);
  
      })

      categorySection.append(categoryHeading,cardsWrapper);
      return categorySection;
    
 }



   
    