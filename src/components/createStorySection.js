import createElement from "./createElement";
import createImage  from "./createImage";
import chef1  from '../assets/chef1.jpg';
import chef2  from '../assets/chef2.jpg';
import chef3  from '../assets/chef3.jpg';
import chef4  from '../assets/chef4.jpg';


export default function createStorySection(){

    const restaurantsection=createElement('div','restaurant-section');

    const restaurantStorySide1=createElement('div','section-1');
    const story_headline=createElement('h3','story-headline',"Our Journey at The Food's Den")
    const story_text=createElement('p','story-text',"Our story begins with a simple yet powerful vision: to bring people together through the love of good food. Established in 2015, our founders set out on a mission to create a dining experience that not only satisfies hunger but also nourishes the soul.From the very beginning, we’ve been passionate about using fresh, locally sourced ingredients to craft dishes that celebrate bold flavors and time-honored recipes.  As we continue to grow, our dedication to providing exceptional food, warm hospitality, and a welcoming environment remains unchanged.Thank you for being part of our journey. We look forward to serving you!");
    restaurantStorySide1.append(story_headline,story_text);

    const restaurantStorySide2=createElement('div','section-2');

    const img1Container=createElement('div','align-1');
    const img1=createImage(chef1,'chef pic 1','chef-1  img');
    img1Container.append(img1);

    const img2Container=createElement('div',"align-2  diagonal-1");
    const img2=createImage(chef2,'chef pic 2','chef-2  img');
    img2Container.append(img2);

    const img3Container=createElement('div',"align-2 diagonal-2")
    const img3=createImage(chef3,'chef pic 3','chef-3  img');
    img3Container.append(img3);

    const img4Container=createElement('div','align-1');
    const img4=createImage(chef4,'chef pic 4','chef-4 img');
    img4Container.append(img4);

    restaurantStorySide2.append(img1Container,img2Container,img3Container,img4Container);
    
    restaurantsection.append(restaurantStorySide2,restaurantStorySide1);
    return restaurantsection;
}