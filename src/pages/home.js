

import createElement  from "../components/createElement";
import createImage from "../components/createImage";
import createButton from "../components/createButton";
import createFeatureCard from "../components/createFeatureCard";
import  restaurant_pic   from '../assets/restaurant.jpg';

export   const  homeTab=()=>{

    const home_div=createElement('div','home');
    console.log(home_div);

    // A container for holding headline,tagline and description
    const home_content_hold=createElement('div','content-hold');

    // headline
    const home_headline=createElement('h1','homeHeadline',"The Food's Den");

    //Tagline
    const home_tagline=createElement('h3','homeTagline',"Where Flavor Meets Finesse");

    //image
    const home_img=createImage(restaurant_pic,'img','home-img');
 
    
     // desription
     const home_des=createElement('p','description',"Discover a place where cravings meet creativity.Welcome to The Foodies Den — your destination for mouthwatering flavors, cozy ambiance, and unforgettable dining moments. Whether you're here for a casual bite or a gourmet indulgence, step into a world where every dish is made to delight.");
     // apending to home
     home_content_hold.append(home_headline,home_tagline,home_des);

     const features=[
        {icon:"🥬",   title:"Fresh Ingredients",description:"only the freshest"},
        {icon:"🚚",   title:"Fast Delivery" ,   description:"Hot and on time!"},
        {icon:"🌿",   title:"100% Organic",     description:"Healthy and natural"}
     ]

    const featureContainer=createElement('div','feature-container');
     features.forEach((feature)=>{
        const feature_card=createFeatureCard(feature.icon,feature.title,feature.description);
        featureContainer.append(feature_card);
     })
     

     const ctaEle=createElement('div','cta');
     const headline2=createElement('h2','cta_headline','Discover our Flavors');
     const button=createButton('See Menu','cta-menu-btn');
     ctaEle.append(headline2,button);
     home_div.append(home_img,home_content_hold, featureContainer,ctaEle);
     return home_div;
       
}
