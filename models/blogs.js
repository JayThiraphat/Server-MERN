//ชื่อบทความ (title) , เนื้อหาบทความ (content) , ผู้เขียน (author) ,slug(url)
//install postman -> install-postman
const mongoose = require("mongoose")

const blogSchema  = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:{},
        required:true
    },
    author:{
        type:String,
        default:"Admin"
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true //ค่าห้ามซ้ำ
       
    }
},{timestamps:true})

module.exports = mongoose.model("Blogs",blogSchema)

// computer-1 ->
// computer-2 ->