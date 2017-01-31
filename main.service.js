angular.module("app").service("mainService", ['$http', function ($http) {
    return {
        //method to call Random Trump Quote API
        getTrumpQuote: function () {
            //now calling API endpoint
            return $http.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random").then(function (response) {
                //wait for response then return to caller
                return response.data.message;
            })
        }

    }

}]);