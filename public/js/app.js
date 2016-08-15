angular.module('app', ['oc.lazyLoad', 'ngSanitize', 'ngMap', 'ngAnimate', 'ui-rangeSlider', 'ngRoute', 'ui.materialize', 'ngAutocomplete', 'angularUtils.directives.dirPagination', 'djds4rce.angular-socialshare'])
    .controller('globalUserController', globalUserController)
    .config(routes)
    .run(function($rootScope, $location, $FB) {
        $FB.init('YOUR_APPID');
        $rootScope.ADMIN_EMAIL = 'hobbnbadmin@hobbnb.com';
        // var path = function() {
        //     return $location.path();
        // };
        // $rootScope.$watch(path, function(newVal, oldVal) {
        //     $rootScope.activetab = newVal;
        // });
    });
