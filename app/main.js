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
                })

                .when('/chucknorris', {
                    controller: 'ChuckNorrisController',
                    template: '<h3>{{ title }}</h3>'
                });
        }]);
}());
