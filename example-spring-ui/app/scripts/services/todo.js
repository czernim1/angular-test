'use strict';

angular.module('ExampleSpringApp').factory('Todos', function($resource) {
	  return $resource('/api/todos/:action/:todoId/:title', {
	    todoId : '@todoId', title : '@title', action : '@action'}, {
	    done : {
	      method : 'PUT',
	      params : {action : 'done'},
	      isArray : false
	    }
	  });
	});
