import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import User from '../models/User.js'
import Post from '../models/Post.js'


//Create
router.post('/', async (req,res)=>{
 const post =  new Post(req.body);
 try {
     const newPost = await post.save();
     res.status(200).json(newPost);
 } catch (error) {
     res.status(400).json(error);
 }

});

//Update
 
router.put('/:id', async (req,res)=>{
      try {
          const post =await Post.findById(req.params.id);
          if(post.username === req.body.username){
              try {
                  const newPost = await Post.findByIdAndUpdate(req.params.id,{
                      $set:req.body,
                  },{new:true})
                  res.status(200).json(newPost);
              } catch (error) {
                  res.status(400).json(error);
              }
          }
          else{
              res.send("You can update only your post")
          }
        } catch (error) {
          res.status(400).json(error);
      }
   
   });
 
// Delete

router.delete('/:id', async (req,res)=>{
    try {
        const post =await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                const newPost = await Post.findByIdAndDelete(req.params.id);
                res.status(200).json("Post has been deleted");
            } catch (error) {
                res.status(400).json(error);
            }
        }
        else{
            res.send("You can delete only your post")
        }
      } catch (error) {
        res.status(400).json(error);
    }
 
 });

//GET
 
router.get('/:id', async(req,res) =>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json(error);
    }
})

// Get All Post
router.get('/', async(req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    
    try {
        let posts;
        if(username){
          posts  =await Post.find({username});
        }
        else if(catName){
            posts =await Post.find({
                categories:{
                    $in:[catName],
                }
            })
        }
        else{
           posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json(error);
    }
})





export default router