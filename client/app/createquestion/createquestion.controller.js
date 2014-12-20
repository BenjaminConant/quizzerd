'use strict';

// each user should have an array of question ids assocated with them ...
// the my questions page should display all the questions whos ids are in the given users question ids array
// adding a question from the find questions page should add a question to the users question ids array
// when a user edits question that used to be public it should not modify the original question but instead should
// create a new question



angular.module('thirdfullstackApp')
  .controller('CreatequestionCtrl', function ($scope, question, Auth) {

  $scope.resetDefaultQuestion = function() {
    $scope.defaultQuestion = {
      'prompt': "",
      'answerOptions': [
      {'value':"", 'correct':true},
      {'value':"", 'correct':false},
      {'value':"", 'correct':false},
      {'value':"", 'correct':false}
      ],
      'creatorID': Auth.getCurrentUser()._id,
      'isPublic': false
    };
  }
  $scope.resetDefaultQuestion();
  console.log(Auth.getCurrentUser());
  console.log($scope.defaultQuestion);

    $scope.addAnswerOption = function() {
      var answerOptions = $scope.defaultQuestion.answerOptions;
      answerOptions.push({'value':"", 'correct':false});
    };

    $scope.removeAnswerOption = function(indexOfAnswer) {
      var answerOptions = $scope.defaultQuestion.answerOptions;
      answerOptions.splice(indexOfAnswer, 1);
    };

    $scope.checkAnswer = function(option) {
      if (option.correct) return true;
    };

    $scope.setCorrectAnswer = function(option) {
      $scope.defaultQuestion.answerOptions.forEach(function(opt) {
        opt.correct = false;
      });
      option.correct = true;
    };

    $scope.setIncorrectAnswer = function(option) {
      option.correct = false;
    };

    $scope.saveQuestion = function() {
      question.save($scope.defaultQuestion);
      $scope.resetDefaultQuestion();
      $scope.setDisplay("my questions");
    };
  });
