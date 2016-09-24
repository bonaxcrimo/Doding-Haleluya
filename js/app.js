var app = angular.module('dodingApp', [
    'ngRoute', 'dodingCtrl', 'dodingFactory'
]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'template/daftarDoding.html'
            , controller: 'dodingCtrl'
        })
        .when('/:noDoding', {
            templateUrl: 'template/detailDoding.html'
            , controller: 'detailCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});


