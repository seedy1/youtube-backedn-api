
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookmarksSchema = new Schema({
    link: {
        type: String,
        required: true,
    }
});

const Booksmarks = mongoose.model("Bookmarks", bookmarksSchema);

module.exports = Booksmarks;
