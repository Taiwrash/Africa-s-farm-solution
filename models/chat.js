const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
  username: String,
  message: String
});


module.exports = mongoose.model('Chat', chatSchema);
