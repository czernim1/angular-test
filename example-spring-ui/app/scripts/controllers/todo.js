'use strict';

angular.module('ExampleSpringApp').controller('TodoCtrl', [ '$scope', 'Todos', function($scope, Todos) {
  $scope.todos = Todos.query();

  $scope.addTodo = function() {
//	  var todo = Todos.get({todoId:1}, function(){
//		  alert(todo.title);
//	  });
	  Todos.save({title: $scope.todo});
	  $scope.todos.push({title: $scope.todo});
	  $scope.todo = '';
  };

  $scope.done = function(index) {
	  var doneTodoId = $scope.todos[index].entityId;
	  var todo = Todos.done({todoId: doneTodoId}, function() {alert("done: " + todo.title);});
	  $scope.todos.splice(index, 1);
  };

  $scope.remove = function(index) {
	  var todoIdToRemove = $scope.todos[index].entityId;
	  Todos.remove({todoId : todoIdToRemove});
	  $scope.todos.splice(index, 1);
  };
} ]);