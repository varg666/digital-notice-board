const Content = require('../models/content');

exports.addSlide = (req, res) => {

    if(!req.body) {
        res.send({message: "No content sent!"});
    }

    if(req.body){
      console.log(req.body);
    }

     newSlide = new Content(req.body);
      newSlide.save(function(err) {
        if(err) {
          return res.send(err);
        }
        
        return res.send({message: "Content created successfully!"})
    });
};