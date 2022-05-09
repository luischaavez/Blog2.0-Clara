import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import Category from '../models/Catagory.js';


//Create
router.post('/', async(req,res) =>{
   const cat = new Category(req.body);
   try {
       const newCat = await cat.save();
       res.status(200).json(newCat);
   } catch (error) {
       res.status(400).json(error);
   }
})

//Get All categories
router.get('/', async(req,res) =>{
    try {
        const newCat = await Category .find();
        res.status(200).json(newCat);
    } catch (error) {
        res.status(400).json(error);
    }
 })
 



export default router
