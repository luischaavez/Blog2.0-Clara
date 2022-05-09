import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import User from '../models/User.js'
import Post from '../models/Post.js'


//Update
router.put('/:id', async (req,res)=>{
  
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt)
           }
 try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            },{new:true}  );
          const {password, ...others} = updateUser._doc
          res.status(200).json(others);

    } catch (error) {
        res.status(400).json(error);
    }


})

//Delete
router.delete('/:id', async (req,res)=>{
    
        try {
             const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username:user.username});
                const deleteUser = await User.findByIdAndDelete(req.params.id);
                res.status(200).json("The user has been deleted");
            } catch (error) {
                res.status(400).json(error);
            }
        } catch (error) {
            res.status(400).json('User not found');
        }
 
})
 

//GET
router.get('/:id', async (req,res)=>{

    try {
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(400).json(error);
    }

})




export default router