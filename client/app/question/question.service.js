'use strict';

angular.module('thirdfullstackApp')
  .factory('question', function ($http, Auth) {
    // Service logic
    // ...

// can have vars out here

    // Public API here
    return {
      save: function (newQuestion) {
        return $http.post('/api/questions', newQuestion);
      },
      findUsersQuestions: function () {
        return $http.get('/api/questions/' + Auth.getCurrentUser()._id);
      },
      findPublicQuestions: function () {
        return $http.get('/api/questions/public');
      },
      update: function (question) {
        var questionId = question._id;
        var requestPath = '/api/questions/' + questionId;
        return $http.put(requestPath, question);
      },
      delete: function (questionId) {
        return $http.delete('/api/questions/' + questionId);
      }

    };
  });
