(function () {
    angular.module('app-root', ['ngRoute'])

        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    controller: 'MainController',
                    templateUrl: 'app/views/home.html'
                })

                .when('/todo', {
                    controller: 'TodoController',
                    templateUrl: 'app/views/todo.html'
                });
        }])

        .controller('MainController', ['$scope', '$http', function ($scope, $http) {
            $scope.title = 'AngularJS';

            setInterval(function () {
                $http.get('https://api.chucknorris.io/jokes/random')
                    .then(
                        function (response) {
                            // success
                            console.log('Je suis dans le service');
                            return response.data;
                        }
                    )
                    .then(
                        function (data) {
                            $scope.title = data.value;
                        }
                    );
            }, 5000);

        }])

        .controller('TodoController', ['$scope', function ($scope) {
            $scope.tasks = [];
            $scope.task = {
                name: '',
                done: false
            };

            $scope.add = function (event) {
                if (((event.keyCode && event.keyCode === 13) || event.clientX) && $scope.task.name) {
                    $scope.tasks.push({
                        name: $scope.task.name,
                        done: $scope.task.done
                    });

                    $scope.task.name = '';
                }
            };

            $scope.remove = function (index) {
                $scope.tasks.splice(index, 1);
            };

            $scope.taskCount = 0;

            $scope.remaining = function () {
                $scope.taskCount++;
            };

        }]);

}());
