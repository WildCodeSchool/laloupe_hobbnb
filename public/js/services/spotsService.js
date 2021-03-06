angular.module('app')
    .service('spotsService', function($http) {
        return {
            get: function() {
                return $http.get('/api/spots');
            },
            getOne: function(id) {
                return $http.get('/api/spots/' + id);
            },
            update: function(id, data) {
                return $http.put('/api/spots/' + id, data);
            },
            create: function(data) {
                return $http.post('/api/spots', data);
            },
            delete: function(id) {
                return $http.delete('/api/spots/' + id);
            }
        };
    });
