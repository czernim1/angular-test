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
	  return $resource('/api/todos/:todoId/:title', {
	    todoId : '@id', title : '@title'}, {
	    done : {
	      method : 'PUT',
	      isArray : false
	    },
	    add : {
	    	method : 'POST',
	    	params : {title: 'todo'},
	    	isArray : false
	    }
	  });
	});
