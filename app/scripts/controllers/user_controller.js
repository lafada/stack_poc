app.controller('userController', ['$scope', '$resource',
        function($scope, $resource){

            var user_resource = $resource('/api/user');

            $scope.users = [];

            user_resource.query(function (response) {
                $scope.users = response;
            });

            $scope.userCreate = function() {
                var user = new user_resource();
                user.name = $scope.userName;
                user.$save(function(response) {
                    $scope.users.push(response);
                });
                $scope.userName = "";
            };
}]);
