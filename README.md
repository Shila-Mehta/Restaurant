## 🍽️ The Food's Den — Restaurant Website

A fully interactive and modular restaurant web application built using vanilla JavaScript, HTML, and CSS.
It dynamically renders pages like Home, Menu, About, Cart, and Order Confirmation using JavaScript components — no frameworks required!

## 🖼️ Screenshots
🏠 Home Page
<img width="2720" height="3052" alt="shila-mehta github io_Restaurant_ (5)" src="https://github.com/user-attachments/assets/7423969a-877c-4e21-ba95-6d63ad246e07" />


🍴 Menu Page
<img width="2720" height="3052" alt="shila-mehta github io_Restaurant_ (6)" src="https://github.com/user-attachments/assets/bc9ae1e9-deea-4ed7-a206-fd121e9c0716" />


📞 About Page
<img width="2720" height="3052" alt="shila-mehta github io_Restaurant_ (7)" src="https://github.com/user-attachments/assets/0fe6e5e6-6429-4fb6-8f7e-29adb6fc29ce" />


🛒 Cart Page

<img width="2720" height="3052" alt="shila-mehta github io_Restaurant_ (8)" src="https://github.com/user-attachments/assets/aa2687de-0db0-444b-ad70-7279a8f0b9b5" />

Order Page 
<img width="2720" height="3052" alt="shila-mehta github io_Restaurant_ (9)" src="https://github.com/user-attachments/assets/72c90195-2fd1-4780-b4ef-ab6a5a1e911a" />




## Live Demo (https://shila-mehta.github.io/Restaurant/)

🛠️ Teck Stack
Frontend	HTML5, CSS3, JavaScript (ES6 Modules)
Design	Flexbox, CSS Grid, Responsive Design
Maps	Google Maps Embed API
Version Control	Git & GitHub


## 🌟 Features

🏠 Home Page – Engaging hero image, tagline, and restaurant story

🍴 Menu Page – Dynamically filtered items by category

📞 About Page – Restaurant story, contact info, and Google Map integration

🛒 Cart Page – Add items, update totals, and place orders

🚚 Order Confirmation Page – Simple confirmation UI with delivery animation

🧩 Component-Based Architecture – Modular design for reusable UI pieces

💡 Dynamic Rendering – Page switching handled purely with JS logic

📱 Responsive Layout – Works on both desktop and mobile screens

## 🧠 Core Concepts
Concept	Description
createElement	Utility for dynamically creating DOM elements with class names and text
createButton, createImage, createFeatureCard	Modular UI components
menuTab, homeTab, aboutTab, cartTab, placeOrderTab	Independent page modules exported and rendered dynamically
filterMenuItems, createFilter	Handles menu item filtering logic
updateTotal	Dynamically recalculates cart totals
Google Maps Embed	Used inside About Page for location section

## 🧱 Folder Structure
```
└── 📁Restaurant
            └── 📁src
        └── 📁assets
            ├── about.png
            ├── Bruschetta.jpg
            ├── cart.png
            ├── cheese Pizza.jpg
            ├── Cheesecake.jpg
            ├── chef1.jpg
            ├── chef2.jpg
            ├── chef3.jpg
            ├── chef4.jpg
            ├── Chocolate Brownie.jpg
            ├── facebook.png
            ├── Garlic Bread.jpg
            ├── home-address.png
            ├── Iced Tea.jpg
            ├── Lemonade.jpg
            ├── logo.png
            ├── menu.png
            ├── order.png
            ├── restaurant.jpg
            ├── roasted chicken.jpg
            ├── soda.jpg
            ├── Spaghetti Carbonara.jpg
            ├── Spicy Ramen Bowl.jpg
            ├── stuffed Bell.jpg
            ├── surprise Platter.jpg
            ├── Tomato Soup.jpg
            ├── truck.png
            ├── twitter.png
            ├── vanilla icecream.jpg
            ├── whatsapp.png
        └── 📁components
            ├── creatCartItems.js
            ├── createButton.js
            ├── createCard.js
            ├── createCardButton.js
            ├── createCategorySection.js
            ├── createContactSection.js
            ├── createElement.js
            ├── createFeatureCard.js
            ├── createFilter.js
            ├── createImage.js
            ├── createMap.js
            ├── createStorySection.js
            ├── filterMenuItems.js
            ├── updateTotal.js
        └── 📁data
            ├── cartData.js
            ├── menuItems.js
        └── 📁pages
            ├── about.js
            ├── cart.js
            ├── home.js
            ├── menu.js
            ├── placeOrder.js
        └── 📁styles
            ├── about.css
            ├── cart.css
            ├── home.css
            ├── main.css
            ├── menu.css
            ├── placeOrder.css
        ├── index.js
        ├── template.html
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── webpack.config.js
```

🚀 Future Enhancements

🧾 Add persistent cart using localStorage

🧠 Add AI-based food recommendations

💳 Integrate online payment gateway (Stripe / Razorpay)

🧭 Add routing (History API) for real URLs

🌐 Add language selection feature

👩‍💻 Author
Nimra Abdul Jabbar

GitHub:(https://github.com/)

