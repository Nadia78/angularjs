'use strict';

(function () {
    angular.module('app-blog')

        .factory('articleService', function ($http) {

            return {
                findAll: function () {
                    return $http.get('http://localhost:8000/articles')
                        .then(
                            function (response) {
                                // success
                                return response.data;
                            },
                            function (err) {
                                console.log(err);
                            }
                        );
                }
            };
        });

}());