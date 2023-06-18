import book from "./model.js"

// for user 
const uploadBook = async(req, res) =>{
    try{
        
        const newBook = new book({...req.body});
        await newBook.save()
        res.status(200).json(newBook)
    }catch(err){
        res.status(400).json(err.message)
    }
    
}

export default uploadBook;