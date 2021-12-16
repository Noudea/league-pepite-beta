import { Mongoose } from "mongoose";

const channelsSchema = new Mongoose.Schema({
  title: String,
  description: String,
  initial: String,
  updated_at: Date,
  created_at: Date
})

module.exports = mongoose.models.Channels || mongoose.model('channels', channelsSchema)