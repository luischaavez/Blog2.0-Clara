import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
       title:{
           type:String,
           required:true,
           unique:true
       },
       desc:{
           type:String,
           required:true,
       },
       photo:{
           type:String,
        //    default:'https://source.unsplash.com/random/300×300'
           
       },
       username:{
           type:String,
           required:true
       },
       category:{
           type:Array,
           required:false
       }
    },
        {timestamps:true}
)
 const PostSc = mongoose.model("Post",PostSchema);
 export default PostSc;