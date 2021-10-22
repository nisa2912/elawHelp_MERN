import mongoose from 'mongoose';

const ItemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date() 
    },
    specialization: {
        type: String,
        required: true
    }

});

const Item = mongoose.model('item', ItemSchema);
export default Item;


