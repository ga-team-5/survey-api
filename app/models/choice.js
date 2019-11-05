const mongoose = require('mongoose')

const choiceSchema = new mongoose.Schema({
  votes: {
    type: Number,
    required: true,
    default: 0
  },
  title: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Choice', choiceSchema)