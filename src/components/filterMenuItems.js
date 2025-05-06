
export  default function filterMenuItems(menuItems,criteria){

    return menuItems.filter((item)=>{

        if(criteria.category && item.category!==criteria.category) return false;

        const numericPrice = parseFloat(item.price.replace('$', ''));
        if (criteria.price !== null && numericPrice > criteria.price) return false;
                
        return true;

    })
}