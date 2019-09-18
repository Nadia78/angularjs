'use strict';

(function () {

    angular.module('app-root')

        // {{ 'texte à filter' | truncate:40 }}
        .filter('truncate', function () {
            return function (input, size) {
                size = size || 20;
                return input.substr(0, size) + '...';
            };
        });

}());