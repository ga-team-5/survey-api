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
    option1: {
      title: {
        type: String,
        required: true
      },
      votes: {
        type: Number,
        required: true,
        default: 0
      }
    },
    option2: {
      title: {
        type: String,
        required: true
      },
      votes: {
        type: Number,
        required: true,
        default: 0
      }
    },
    option3: {
      title: {
        type: String,
        required: true
      },
      votes: {
        type: Number,
        required: true,
        default: 0
      }
    },
    option4: {
      title: {
        type: String,
        required: true
      },
      votes: {
        type: Number,
        required: true,
        default: 0
      }
    }
  }]
},
{
  timestamps: true,
  toObject: {virtuals: true},
  toJSON: {virtuals: true}

})

surveySchema.virtual('totalVotes').get(function () {
  return this.choices.reduce((acc, cur) => {
    return acc + cur.votes
  })
})

module.exports = mongoose.model('Survey', surveySchema)
