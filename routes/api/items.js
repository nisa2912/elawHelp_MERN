import express from "express";
//import { Router } from 'express';


import Item from '../../models/Item.js';


const router = express.Router();

// GET req to api/items
//GET all items


router.get('/', (req, res) => {
    Item.find()
      .sort({date: -1})
      .then(items => res.json(items));
  });


router.post('/', (req, res) =>{

    const newItem = new Item({
        name: req.body.name ,
        specialization: req.body.specialization
    });

    newItem.save().then(item => res.json(item));

})

router.delete('/:id', (req, res) =>{

    Item.findById(req.params.id).then(item =>
    item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
  })
  

export default router;
 