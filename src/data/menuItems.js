import Garlic_bread from '../assets/Garlic Bread.jpg';
import Tomato_Soup  from '../assets/Tomato Soup.jpg';
import Bruschetta  from  '../assets/Bruschetta.jpg';
import  Cheese_Pizza from '../assets/cheese Pizza.jpg';
import  Spaghetti_Carbonara  from  '../assets/Spaghetti Carbonara.jpg';
import Grilled_Chicken  from '../assets/roasted chicken.jpg';
import  Chocolate_Brownie  from '../assets/Chocolate Brownie.jpg';
import Vanilla_Ice_Cream  from  '../assets/vanilla icecream.jpg';
import  Cheesecake  from '../assets/cheese Pizza.jpg';
import Lemonade  from '../assets/Lemonade.jpg';
import  Soda from '../assets/soda.jpg';
import Iced_Tea  from '../assets/Iced Tea.jpg';
import Chef_Surprise_Platter  from "../assets/surprise Platter.jpg";
import Spicy_Ramen_Bowl from '../assets/Spicy Ramen Bowl.jpg';
import  Stuffed_Bell_Peppers  from '../assets/stuffed Bell.jpg';
    

  const  menuItems={
        "starters":[
            {src:Garlic_bread,title:'Garlic Bread',description:"Toasted bread topped with garlic and herbs",price:"$8"},
            {src:Tomato_Soup,title:'Tomato Soup',description:"Creamy tomato soup served with croutons.",price:"$9"},
            {src:Bruschetta,title:'Bruschetta',description:"Grilled bread topped with fresh tomatoes and basil",price:"$6"}
        ],
        "Main Course":[
            {src:Cheese_Pizza,title:'Cheese Pizza',description:"Classic pizza with melted mozzarella and tomato sauce",price:"$10"},
            {src:Spaghetti_Carbonara,title:'Spaghetti Carbonara',description:"Creamy pasta with bacon, egg, and parmesan",price:"$30"},
            {src:Grilled_Chicken,title:'Grilled Chicken',description:"Juicy grilled chicken breast with herbs and spices",price:"$12"}
        ],
        "Desserts":[
            {src:Chocolate_Brownie,title:'Chocolate Brownie',description:"Rich and fudgy chocolate brownie served warm",price:"$60"},
            {src:Vanilla_Ice_Cream,title:'Vanilla Ice Cream',description:"Classic vanilla ice cream with a creamy texture",price:"$50"},
            {src:Cheesecake,title:'Cheesecake',description:"Smooth cheesecake with a buttery graham crust",price:"$22"}
        ],
        "Drinks":[
            {src:Lemonade,title:'Lemonade',description:"Refreshing lemon drink with a hint of mint",price:"$4"},
            {src:Soda,title:'Soda',description:"Chilled fizzy beverage in assorted flavors",price:"$3"},
            {src:Iced_Tea,title:'Iced Tea',description:"Brewed tea served cold with lemon slices.",price:"$20"}
        ],
        "Specials":[
            {src:Chef_Surprise_Platter,title:"Chef's Surprise Platter",description:"A unique assortment of chef-selected dishes",price:"$75"},
            {src:Spicy_Ramen_Bowl,title:'Spicy Ramen Bowl',description:"Hot ramen noodles in a spicy broth with toppings",price:"$25"},
            {src:Stuffed_Bell_Peppers,title:'Stuffed Bell Peppers',description:"Bell peppers filled with seasoned rice and veggies",price:"$49"}
        ],
       

    }

      export default menuItems;
