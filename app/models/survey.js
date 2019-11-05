const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  choices: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Choice',
    required: true
  }]
},
{
  timestamps: true,
  toObject: {virtuals: true},
  toJSON: {virtuals: true}

})

surveySchema.virtual('totalVotes').get(function(){
  return this.choices.reduce((acc,cur) => acc + cur.votes )
  // should add up all the votes for each choice
})
module.exports = mongoose.model('Survey', surveySchema)
