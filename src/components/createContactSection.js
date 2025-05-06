import createElement from "../components/createElement";

export default function createContactInfo(){
    const contact_div=createElement('div','contact-info');
    
    const headline=createElement('h1',"about-heading",'Contact Us');
   
    const address=createElement("p",'address','123 Food street,Flavor Town');
  
    const phone=createElement('p','phone',"+92 123 456 7890");
   
    const hours=createElement('p','timing','Open Daily: 12PM -11PM');
   
    contact_div.append(headline,address,phone,hours);
    return contact_div;
   
}