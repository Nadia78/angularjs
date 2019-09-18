'use strict';

(function () {
    angular.module('app-root')
    
        // E === Element <toggleBox></toggleBox>
        // A === Attribut <div toggleBox></div>
        // C === <div class="toggleBox"></div>

        .directive('toggleBox', function () {
            return {
                restrict: 'EA',
                scope: {},
                template: '<h2>{{ title }}</h2>' +
                        '<div>content</div>',
                link: function (scope, elem, attrs) {
                    scope.title = "C'est l'heure d'aller manger";
                }
            };
        });
}());