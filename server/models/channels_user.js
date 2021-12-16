const Mongoose = require('mongoose');

const channelsUserSchema = new Mongoose.Schema({
  title: String,
  user_id: int,
  channel_id: int,
})

module.exports = mongoose.models.channelsUser || mongoose.model('channels', channelsUserSchema)