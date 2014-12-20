'use strict';

angular.module('thirdfullstackApp')
  .controller('MainCtrl', function ($scope, $http, socket, Auth, question) {
    $scope.awesomeThings = [];
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    $scope.questions;
    $scope.findQuestions = function () {
      question.findUsersQuestions().success(function(questions) {
        $scope.questions = questions;
        console.log($scope.questions);
      });
    }
    $scope.findQuestions();

    $scope.deleteQuestion = function (questionId) {
      question.delete(questionId);
      $scope.findQuestions();
    }

    $scope.makeQuestionPublic = function(q) {
      console.log("hello from make Q public");
      q.isPublic = true;
      question.update(q);
      $scope.findQuestions();
    }



    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.display = "my questions";

    $scope.setDisplay = function(thingToDisplay) {
      $scope.display = thingToDisplay;
      $scope.findQuestions();
    }

    $scope.checkDisplay = function (thingThatCouldBeDisplayed) {
      if ($scope.display === thingThatCouldBeDisplayed) {
        return true;
      } else {
        return false;
      }
    }

});
