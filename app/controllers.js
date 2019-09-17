'use strict';

(function () {

    angular.module('app-root')

        .controller('MainController', ['$scope', function ($scope) {
            $scope.title = 'AngularJS';
        }])

        .controller('ChuckNorrisController', ['$scope', '$http', function ($scope, $http) {
            $scope.title = 'Chuck Norris citation';

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
            }, 4000);
        }])

        .controller('TodoController', ['$scope', function ($scope) {
            $scope.title = 'Todo List';
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