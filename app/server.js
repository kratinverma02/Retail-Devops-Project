const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Products API with categories
app.get('/products', (req, res) => {
    res.json([
        { id:1, name:"Laptop", price:50000, category:"Electronics", image:"https://via.placeholder.com/150?text=Laptop" },
        { id:2, name:"Phone", price:20000, category:"Electronics", image:"https://via.placeholder.com/150?text=Phone" },
        { id:3, name:"Headphones", price:3000, category:"Accessories", image:"https://via.placeholder.com/150?text=Headphones" },
        { id:4, name:"Watch", price:8000, category:"Accessories", image:"https://via.placeholder.com/150?text=Watch" },
        { id:5, name:"Shoes", price:2500, category:"Fashion", image:"https://via.placeholder.com/150?text=Shoes" },
        { id:6, name:"T-Shirt", price:800, category:"Fashion", image:"https://via.placeholder.com/150?text=Tshirt" }
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
