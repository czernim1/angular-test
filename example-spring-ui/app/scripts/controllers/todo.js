'use strict';

angular.module('ExampleSpringApp').controller('TodoCtrl', [ '$scope', 'Todos', function($scope, Todos) {
  $scope.todos = Todos.query();

  $scope.addTodo = function() {
	  Todos.save({title: $scope.todo});
	  $scope.todos.push({title: $scope.todo});
	  $scope.todo = '';
  };

  $scope.done = function(index) {
	  var doneTodoId = $scope.todos[index].entityId;
	  var todo = Todos.done({todoId: doneTodoId});
	  $scope.todos.splice(index, 1);
  };

  $scope.remove = function(index) {
	  var todoIdToRemove = $scope.todos[index].entityId;
	  Todos.remove({todoId : todoIdToRemove});
	  $scope.todos.splice(index, 1);
  };
} ]);
