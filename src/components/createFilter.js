import createElement from "./createElement";
import createButton from  "./createButton";

export default function createFilter(categories,onFilterChange){
    const container=createElement('div','filter-container');

    // dropdown for category
    const select=createElement('select','category-select');
    const alloption=createElement('option','','All Categories');
    select.append(alloption);
    categories.forEach(cat=>{
        const opt=createElement('option','',cat);
        opt.value=cat;
        opt.textContent = cat;
        select.append(opt);

    })

    //Input for max price
    const priceInput=createElement('input','price-input');
    priceInput.type='number';
    priceInput.placeholder='Max Price';


    // filter button
    const button=createButton('Apply Filter','filter-btn');
    button.addEventListener('click',()=>{
        const category=select.value || null;
        const price=priceInput.value ?parseFloat(priceInput.value):null;
        onFilterChange({category,price});
    })

    container.append(select,priceInput,button);
    return container;

}