var app = angular.module('cartisan', []);

app.controller('app', function($scope, $http){

    $scope.base_Url = 'http://dailyfuelprice.herokuapp.com/v1';
    
    $http.get($scope.base_Url + '/cities')
    .then(function(response){
        $scope.myFunc = function() { 
            $scope.text = 'Fetched the prices click Show price!!!!'
            $http.get($scope.base_Url + '/price/' + $scope.city)
            .then(function(result){
                $scope.petrol = result.data.price.petrol;
                $scope.diesel = result.data.price.diesel;
            })
        }
    })
});
