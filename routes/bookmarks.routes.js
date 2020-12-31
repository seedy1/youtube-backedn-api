const router = require("express").Router();
let Bookmarks = require("../model/bookmarks.model");

// List all videos in the history http://localhost:3000/history
router.route("/").get( (req, res) =>{
    Bookmarks.find().then(his => res.json(his))
            .catch(err => res.status(400).json("Error: "+err));
} );

// get bookmarks count
router.route("/count").get( (req, res) =>{
    Bookmarks.countDocuments().then(count => res.json(count));
});

// Add a video to the history
router.route("/").post( (req, res) =>{
    
    const link = req.body.link;
    const newBookmark = new Bookmarks({link});

    newBookmark.save().then( ()=> res.json("New bookmark added") )
                    .catch( err => res.status(400).json("Error: "+err) );

} );

module.exports = router;