 
import createCategorySection from "../components/createCategorySection";
import createElement from "../components/createElement";
import createFilter from "../components/createFilter";
import menuItems from "../data/menuItems";
import filterMenuItems from "../components/filterMenuItems";
export  const  menuTab=function(){

     const menu_div=createElement('div','menu');
     const menu_heading=createElement('h1','menu-heading','Our Delicious menu');
     const menu_content=createElement('div','menu-content');

     const allItems = [];
     for (const [categoryName, items] of Object.entries(menuItems)) {
       items.forEach(item => {
         allItems.push({ ...item, category: categoryName });
       });
     }  
     const categories = [...new Set(allItems.map(item => item.category))];
     
     
     function renderItems(filteredItems){
      menu_content.innerHTML = '';
      if(filteredItems.length===0){
        const msg=createElement('p','','No items match your filter');
        menu_content.append(msg);
        return;
      }


      categories.forEach((category)=>{
        const categoryItems=filteredItems.filter(item =>item.category===category);
        if(categoryItems.length >0){
         const section=createCategorySection(category,categoryItems);
         menu_content.append(section);
        }
       })
      
     }

    

     const filterUI=createFilter(categories,(criteria)=>{
      const filtered=filterMenuItems(allItems,criteria);
      renderItems(filtered);
     })
   

    
    renderItems(allItems);
   
    menu_div.append(menu_heading,filterUI,menu_content);
    return menu_div;

}