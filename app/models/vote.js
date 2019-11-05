const mongoose = require('mongoose')

const voteSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  choiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Choice',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Vote', voteSchema)
