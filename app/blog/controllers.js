'use strict';

(function () {

    angular.module('app-blog')

        .controller('BlogArticlesController', ['$scope', 'articleService', function ($scope, articleService) {
            $scope.title = 'Blog';
            $scope.articles = [];

            articleService.findAll().then(
                function (data) {
                    $scope.articles = data;
                }
            );
        }]);

}());