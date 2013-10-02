'use strict';

/* Filters */
angular.module('todoFilters', []).filter('filterByStatus', function() {
	return function(todos, status) {
		if (status == 'any')
			return todos;
		return todos.filter(function(todo) {
			return todo.status == status;
		});
	};
});