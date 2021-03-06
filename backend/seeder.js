const handleAsync = require('express-async-handler');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');
const User = require('./models/user.model');
const users = require('./data/users');
const Feedback = require('./models/feedback.model');
const productRequests = require('./data/productRequests');
const Comment = require('./models/comment.model');

const feedbacks = require('./data/feedback');
const comments = require('./data/comments');
const { connectDatabase } = require('./config/database');

connectDatabase();

const importData = async () => {
  try {
    //clear collections off to avoid import data that's already in the db
    // await User.deleteMany();
    // await Comment.deleteMany();
    // await Feedback.deleteMany();

    //inserting colllection we getting from our models
    // const createdUsers = await User.insertMany(users);
    // const createdComments = comments.map((comment) => {
    //   const _id = '6295f615da77794675c6a437';
    //   return { ...comment, user: _id };
    // });
    // await Comment.insertMany(createdComments);
    // const createdFeedbacks = feedbacks.map((feedback) => {
    //   const _id = '6295f615da77794675c6a437';
    //   return { ...feedback, comments: _id };
    // });
    // await Comment.insertMany(createdFeedbacks);

    await Feedback.insertMany(productRequests);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Comment.deleteMany();
    await Feedback.deleteMany();
    await User.deleteMany();
    console.log('Data destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
