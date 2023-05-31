const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please enter product name'],
        trim: true,
        maxLength: [100, 'product name cannot exceed 100 characters'],
    },
    price:{
        type: Number,
        required: [true, 'please enter product price'],
        maxLength: [5, 'product name cannot exceed 5 characters'],
        default: '0.0'
    },
    description:{
        type: String,
        required: [true, 'please enter product description'],
        maxLength: [5, 'product name cannot exceed 5 characters'],

    },
    ratings: {
        type: Number,

        default: 0
    }, 
    images: [{
        public_id:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    }],
    category: { 
        type: String,
        required: [true, 'Please enter product category'],
        enum:{
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food'

            ], 
            message: 'Please select product category'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller'], 

    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product stock must be 5 characters long'],
        default: 0
    },
    numOfreviews: {
        type:Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating:{
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now

    },
});

module.exports = mongoose.model('Product', productSchema);