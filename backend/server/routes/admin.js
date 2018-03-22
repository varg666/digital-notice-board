const express = require('express');
const router = express.Router();
const Content = require('../models/content');
const moment = require('moment');
const getYoutubeID = require('./youtube');

const addSlide = (req, res) => {
    if(!req.body) {
        res.send({message: "No content sent!"});
    }

    let slide = req.body;

    if(slide.type === 'video') {
      slide.content = getYoutubeID(slide.content)
    }

    if(typeof(slide.content) !== 'string') {
      slide.content = JSON.stringify(slide.content)
    }

    newSlide = new Content(slide);
      newSlide.save(function(err) {
        if(err) {
          return res.send(err);
        }
        return res.send({message: "Content created successfully!"})
    });
};

const ensureAuthenticated  = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  } else {
    res.send({"error": "You are not authenticated."});
  }
};

router.get('/', ensureAuthenticated, (req, res) => {
  res.json({"success": "You are signed into the admin panel."});
});

// Add New Slide
router.post('/add', addSlide);

// delete Slide
router.delete('/delete/:id', ensureAuthenticated, (req,res) => {
  Content.findById(req.params.id, function(err, Content) {
    if(!Content)
      return res.send({err: 'Content not found'});

    Content.remove(function(err) {
      if(err) {
        return res.send(err);
      }

      console.log('Content deleted');
      return res.send(Content);
    });
  });
});



module.exports = router;