const mongoose = require('mongoose')

const choiceSchema = new mongoose.Schema({
  votes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vote',
    required: true
  }],
  title: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Choice', choiceSchema)
