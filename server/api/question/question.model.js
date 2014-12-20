'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  prompt: String,
  answerOptions: Array,
  creatorID: String,
  isPublic: Boolean
});

module.exports = mongoose.model('Question', QuestionSchema);