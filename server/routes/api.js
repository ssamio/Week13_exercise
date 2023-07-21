var express = require('express');
var router = express.Router();
const Book = require('../models/Book');


//POST a new book
router.post('/book', (req, res) => {
  Book.create({
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages 
  },
  (err, ok) => {
    if(err){
      throw err;
    }
    else{
      return res.status(200).json({success: true});
    }
  });
});

router.get('/book/:name', (req, res) =>{
  Book.findOne({name: req.params.name}, (err, book) =>{
    if(err) throw err;
    else if(book){
      res.status(200).json({book});
    }
    else{
      res.status(404).json({message: "404: This is not the webpage you are looking for"});
    }
  });
});


module.exports = router;
