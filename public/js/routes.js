function routes($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/placesService.js',
                            'js/services/spotsService.js',
                            'js/factories/searchFactory.js',
                            'js/controllers/mainController.js'
                        ]
                    });
                }]
            }
        })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'searchController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/usersService.js',
                            'js/services/placesService.js',
                            'js/services/spotsService.js',
                            'js/factories/placesFactory.js',
                            'js/factories/searchFactory.js',
                            'js/filters/rangeFilter.js',
                            'js/filters/betweenFilter.js',
                            'js/controllers/searchController.js'
                        ]
                    });
                }]
            }
        })
        .when('/edition/place/:id', {
            templateUrl: 'views/places/createPlace.html',
            controller: 'createPlacesController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/placesService.js',
                            'js/factories/placesFactory.js',
                            'js/filters/rangeFilter.js',
                            'js/controllers/createPlacesController.js'
                        ]
                    });
                }]
            }
        })
        .when('/creation/place', {
            templateUrl: 'views/places/createPlace.html',
            controller: 'createPlacesController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/placesService.js',
                            'js/factories/placesFactory.js',
                            'js/filters/rangeFilter.js',
                            'js/controllers/createPlacesController.js'
                        ]
                    });
                }]
            }
        })
        .when('/place/:id', {
            templateUrl: 'views/places/showPlace.html',
            controller: 'placesController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/usersService.js',
                            'js/services/placesService.js',
                            'js/services/messagingService.js',
                            'js/factories/placesFactory.js',
                            'js/factories/searchFactory.js',
                            'js/filters/rangeFilter.js',
                            'js/controllers/messageController.js',
                            'js/controllers/placesController.js'
                        ]
                    });
                }]
            }
        })
        .when('/edition/spot/:id', {
            templateUrl: 'views/spots/create-spot-page.html',
            controller: 'createSpotsController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/spotsService.js',
                            'js/factories/spotsFactory.js',
                            'js/controllers/createSpotsController.js'
                        ]
                    });
                }]
            }
        })
        .when('/creation/spot', {
            templateUrl: 'views/spots/create-spot-page.html',
            controller: 'createSpotsController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/spotsService.js',
                            'js/factories/spotsFactory.js',
                            'js/controllers/createSpotsController.js'
                        ]
                    });
                }]
            }
        })
        .when('/spot/:id', {
            templateUrl: 'views/spots/spot-page.html',
            controller: 'spotsController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/usersService.js',
                            'js/services/spotsService.js',
                            'js/factories/spotsFactory.js',
                            'js/factories/searchFactory.js',
                            'js/filters/rangeFilter.js',
                            'js/controllers/spotsController.js'

                        ]
                    });
                }]
            }
        })
        .when('/picture/:where/:step/:id', {
            templateUrl: 'views/picture.html',
            controller: 'fileUploadController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/directives/fileDirective.js',
                            'js/controllers/fileUploadController.js'
                        ]
                    });
                }]
            }
        })
        .when('/messages', {
            templateUrl: 'views/messaging/inbox.html',
            controller: 'inboxController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/messagingService.js',
                            'js/controllers/inboxController.js'
                        ]
                    });
                }]
            }
        })
        .when('/message/:id', {
            templateUrl: 'views/messaging/message.html',
            controller: 'messageController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/messagingService.js',
                            'js/services/usersService.js',
                            'js/controllers/messageController.js'
                        ]
                    });
                }]
            }
        })
        .when('/messages/:id', {
            templateUrl: 'views/messaging/view.html',
            controller: 'messagingController',
            resolve: {
                connected: checkIsConnected,
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/messagingService.js',
                            'js/services/usersService.js',
                            'js/controllers/messagingController.js'
                        ]
                    });
                }]
            }
        })
        .when('/user/:action', {
            templateUrl: function(params) {
                switch (params.action) {
                    case 'login':
                        //Login then redirect to current profile page
                        return 'views/user/login.html';
                        break;
                    case 'logout':
                        //Logout and redirect to login page
                        return 'views/user/logout.html';
                        break;
                    case 'create':
                        //Create an account
                        return 'views/user/create.html';
                        break;
                    case 'edit':
                        //Create an account
                        return 'views/user/edit.html';
                        break;
                    default:
                        //Show my profile
                        return 'views/user/profile.html';
                }
            },
            controller: 'usersController',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/services/messagingService.js',
                            'js/services/usersService.js',
                            'js/filters/rangeFilter.js',
                            'js/controllers/usersController.js'
                        ]
                    });
                }]
            }
        })
        .when('/sendEmail/', {
            templateUrl: 'views/sendEmail.html',
            controller: 'emailController',
            resolve: {
                lazy: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'app',
                        files: [
                            'js/controllers/emailController.js',
                            'js/services/emailService.js'
                        ]
                    });
                }]
            }
        })
        .when('/email/', {
            templateUrl: 'views/static/email.html',
        })
        .when('/faq', {
            templateUrl: 'views/static/faq.html',
        })
        .when('/find-out-more', {
            templateUrl: 'views/static/find-out-more.html',
        })
        .when('/how-it-work', {
            templateUrl: 'views/static/how-it-work.html',
        })
        .when('/host-cancellation-policy', {
          templateUrl: 'views/static/host-cancellation-policy.html',
        })
        .when('/social-connections', {
          templateUrl: 'views/static/social-connections.html',
        })
        .when('/contact-us', {
          templateUrl: 'views/static/contact-us.html',
        })
        .when('/terms-privacy', {
          templateUrl: 'views/static/terms-privacy.html',
        })
        .when('/about', {
          templateUrl: 'views/static/about.html',
        })
        .when('/press', {
          templateUrl: 'views/static/press.html',
        })
        .otherwise({
            redirectTo: '/'
        });
    $httpProvider.interceptors.push(function($q, $location, $window, $rootScope) {
        return {
            'request': function(config) {
                config.headers = config.headers || {};
                if ($window.localStorage.token) {
                    config.headers.authorization = $window.localStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
                if (response.status === 401 || response.status === 403) {
                    $window.localStorage.removeItem('token');
                    $window.localStorage.removeItem('currentUser');
                    $rootScope.$emit('userUpdated', null);
                    $location.path('/user/login');
                }
                return $q.reject(response);
            }
        };
    });

    function checkIsConnected($q, $http, $location) {
        var deferred = $q.defer();

        $http.get('/users/loggedin').success(function() {
            deferred.resolve();
        }).error(function() {
            deferred.reject();
            $window.localStorage.removeItem('token');
            $window.localStorage.removeItem('currentUser');
            $rootScope.$emit('userUpdated', null);
            $location.path('/user/login');
        });

        return deferred.promise;
    };
}
