

import createElement from "../components/createElement";
import createContactInfo from "../components/createContactSection";
import createStorySection from "../components/createStorySection";
import createMap from "../components/createMap";

export  const aboutTab=function(){
    const about_div=createElement('div','about');
     // contact Info section
    const contactInfo=createContactInfo();

    // restaurant story section
    const restaurantStory=createStorySection();

    const mapSection=createElement('div','map-section');
    const map=createMap("https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49805923.6385213!2d78.74413883124997!3d40.36646821741777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1746294498258!5m2!1sen!2s");
    mapSection.append(map);

    about_div.append(contactInfo,restaurantStory,mapSection);

    return about_div;
}