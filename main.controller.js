angular.module("app").controller("main", ['$scope', 'mainService', function ($scope, mainService) {
    //when button clicked, will call getTrumpQuote method on service
    $scope.trumpQuoteWanted = function () {
        //now calling service method
        mainService.getTrumpQuote().then(function (response) {
            //assign response to $scope
            $scope.quote = response;
        })
    };
}]);