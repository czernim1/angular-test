'use strict';

angular.module('ExampleSpringApp').controller('TodoCtrl', [ '$scope', 'Todos', function($scope, Todos) {
  $scope.todos = Todos.query();

  $scope.addTodo = function() {
	  Todos.save({title: $scope.todo}, function(){
		  $scope.updateContacts();
	  });
	  $scope.todo = '';
  };

  $scope.done = function(doneTodoId) {
	  var todo = Todos.done({todoId: doneTodoId}, function(){
		  $scope.updateContacts();
	  });
  };

  $scope.remove = function(entityId) {
	  Todos.remove({todoId : entityId}, function(){
		  $scope.updateContacts();
	  });
  };
  
  $scope.changeTitle = function(todo) {
	  Todos.update({todoId : todo.entityId, title : todo.title}, function(){
		  $scope.updateContacts();
	  });
  };
  
  $scope.updateContacts = function () {
	  Todos.query( function( data ) {
		  $scope.todos = data;
	  });
  };
} ]);
