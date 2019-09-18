'use strict';

(function () {
    angular.module('app-blog', [])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider

                .when('/blog', {
                    controller: 'BlogArticlesController',
                    templateUrl: 'app/blog/views/articles.html'
                });
        }]);

}());
