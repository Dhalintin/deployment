const mongoose = require('mongoose');

const roomTypeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true}
})

module.exports = mongoose.model('RoomType', roomTypeSchema);