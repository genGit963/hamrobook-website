import mongoose from "mongoose";

// for book product
const bookSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
});
const book = mongoose.model('book', bookSchema)

export default book