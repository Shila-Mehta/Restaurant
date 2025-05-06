import createElement from "./createElement";

export default function createFeatureCard(icon,title,description){

     const featureCard=createElement('div','feature-card');
     
       const feature_icon=createElement('div','feature-icon',icon);
       const feature_Heading=createElement('h3','feature-heading',title);
       const feature_description=createElement('p','feature-description',description);

       featureCard.append(feature_icon,feature_Heading,feature_description);
       return  featureCard;
      
}