// FILE UPLOAD CONTROLLER
angular.module('app').controller('fileUploadController', function($scope, $http, $routeParams) {

    $scope.param = {};
    if ($routeParams.step == 0) {
        $scope.width = 1900;
        $scope.height = 400;
        $scope.picType = 'de couverture (1900x400px)';
    } else {
        $scope.width = 600;
        $scope.height = 600;
        $scope.picType = ' 600x600, jusqu\'à 6 photos';
    }
    $scope.title = $routeParams.where + "/" + $routeParams.id;
});
