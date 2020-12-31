const router = require("express").Router();
let History = require("../model/history.model");

// List all videos in the history http://localhost:3000/history
router.route("/").get( (req, res) =>{
    History.find().then(his => res.json(his))
        .catch(err => res.status(400).json("Error: "+err));
} );


// Add a video to the history
router.route("/").post( (req, res) =>{

    const link = req.body.link;
    const newHistory = new History({link});

    newHistory.save().then( ()=> res.json("New history added") )
                    .catch( err => res.status(400).json("Error: "+err) );

} );

module.exports = router;