const mongoose = require('mongoose');
const Comment = require('./comment.model');

const feedbackSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a title'],
    },
    category: {
      type: String,
      required: true,
      enum: ['enhancement', 'feature', 'bug', 'UX', 'UI'],
    },
    upvotes: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['suggestion', 'planned', 'in-progress', 'live'],
    },
    description: {
      type: String,
      required: [true, 'Please enter a description'],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },

  {
    timeStamps: true,
  }
);
module.exports = mongoose.model('Feedback', feedbackSchema);
