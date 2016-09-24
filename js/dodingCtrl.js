var app = angular.module('dodingCtrl',[]);

app.controller('dodingCtrl', function ($scope, $http,dodingS) {
    $scope.caraSort = 'no';
    $scope.reverse = true;
    dodingS.list(function(doding){
        $scope.doding = doding;

    });
});

app.controller('detailCtrl',function($scope,$routeParams,dodingS,$sce){
    dodingS.find($routeParams.noDoding,function(doding){
        $scope.doding =doding;
        $scope.lirik = $sce.trustAsHtml(doding.lirik);
    });
});
