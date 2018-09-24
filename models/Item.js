const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    quantity: {
        type: String,
        required: false
    },
    description: { 
        type: String,
        required: false
    }
})

module.exports = Item = mongoose.model('items', ItemSchema);