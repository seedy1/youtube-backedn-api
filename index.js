const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const historyRoute = require("./routes/history.routes");
const bookmarkRoute = require("./routes/bookmarks.routes");

const db = require("./config/db.config");
const { url } = require("./config/db.config");


const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.listen(port, () =>{
    console.log("listing on port "+port);
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(url, { useNewUrlParser: true})
            .then( () => {
                console.log("DB connection established");
            }).catch(err => {
                console.log('DB connection F A I L E D !', err);
});
 


app.use("/history", historyRoute);
app.use("/bookmarks", bookmarkRoute);

