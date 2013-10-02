'use strict';

//angular.module('ExampleSpringApp').factory('Todos', [ '$resource', function($resource) {
//  return $resource('/api/todos/:todoId', {
//    todoId : '@id'}, {
//    done : {
//      method : 'PUT'
//    },
//    isArray : false
//  });
//} ]);

angular.module('ExampleSpringApp').factory('Todos', function($resource) {
	  return $resource('/api/todos/:action/:todoId/:title', {
	    todoId : '@id', title : '@title', action : '@action'}, {
	    done : {
	      method : 'PUT',
	      params : {action : 'done'},
	      isArray : false
	    },
	    add : {
	    	method : 'POST',
	    	isArray : false
	    }
	  });
	});
