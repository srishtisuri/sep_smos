const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: false
    },
    Price: {
        type: Number,
        required: false
    },
    Quantity: {
        type: String,
        required: false
    },
    Description: { 
        type: String,
        required: false
    }
})

module.exports = Item = mongoose.model('items', ItemSchema);