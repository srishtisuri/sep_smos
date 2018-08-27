const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', (req, res) => {
    Item.find()
        .then(data => res.json(data))
        .catch(err => console.log(err));
})

router.get('/getItem/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => console.log(err));
})

router.get('/generateData/:amount', (req, res) => {
    let types = ['Stapler', 'Pencil', 'Pen', 'Sharpener', 'Eraser', 'Books', 'Notepad', 'Whiteboard Marker', 'Whiteboard']
    let colors = ['Black', 'Red', 'Blue', 'Yellow', 'Green', 'Orange', 'Rainbow', 'Pink', 'Purple']
    let prices = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50]
    let quantities = [0, 10, 20, 30, 40, 50]
    for (let i = 0; i < parseInt(req.params.amount); i++) {
        var randType = types[Math.floor(Math.random() * types.length)]
        var randItem = colors[Math.floor(Math.random() * colors.length)] + ' ' + randType;
        var randPrice = prices[Math.floor(Math.random() * prices.length)];
        var randQuantity = quantities[Math.floor(Math.random() * quantities.length)];
        const newItem = new Item({
            name: randItem,
            type: randType,
            price: randPrice,
            quantity: randQuantity,
            description: randItem + " is one of the many items you can buy"
        });
        newItem.save()
    };
    res.json({ success: true })
})

router.get('/deleteData', (req, res) => {
    Item.collection.drop()
        .then(() => {
            res.send({ success: true })
        })
        .catch(err=>console.log(err));
})


module.exports = router;