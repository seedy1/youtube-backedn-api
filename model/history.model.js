const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    link: {
        type: String,
        required: true,
    }
});

const History = mongoose.model("History", historySchema);

module.exports = History;
