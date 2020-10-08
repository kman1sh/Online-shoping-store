# Online shoping store
Live Demo https://amazoned.herokuapp.com/

![Giphy Demo](https://github.com/kman1sh/Online-shoping-store/raw/master/frontend/public/images/captured-opt.gif)





# Description
A React + Spring boot ecommerce site. 
- Spring boot as Backend for rest APIs. 
- MongoDb for Database. Mongo Atlast cloud for remote database.
- Reactjs for frontend.
- heroku, deployement service provider.

## Features
- Login and Sign up 
- Shopping cart
- View all my orders
- product filter

#### Previews: 
<img width="800" src="https://i.ibb.co/8BMrKN3/Screenshot-135.png" alt="project-shots" border="0">
<img src="https://raw.githubusercontent.com/kman1sh/Online-shoping-store/master/frontend/public/images/Screenshot%20(137).png" alt="project-shots" border="0"></a>
<img src="https://i.ibb.co/YWKQBJ5/Screenshot-141.png" alt="project-shots" border="0"></a>



## How to run?
### before you start
- Make sure you have mongodb server installed and running. 
- To have sample products data for initial run, create a new db as "amazon" and "products" as collection in mongodb.
- import mongodb-product-sample.json from /backend inside "products" collection.

##### 1st method
start react from frontend and spring boot app from backend together.
##### 2st method
If you don't want to change anything from frontend, a react build is already present in /resources/static. 
So start spring boot app from backend only. and goto http://localhost:server-port. 
