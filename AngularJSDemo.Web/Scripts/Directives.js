/// <reference path="TodoApp.js" />


TodoAPP.directive("upcaser", function() {

    return {
        link: function (scope, element, attrs) {
            //console.log(element);
            $(element).find('*').each(function(i, p) {
                p = $(p);
                p.text(p.text().toUpperCase());
                p.css('color', "red");
                
            });
        }
    };

});


TodoAPP.directive("copyright", function() {
    return {
        retstrict: 'E',
        compile: function(element) {
            element.text('coppyright 2014 offshore3');
        }
    };

});


TodoAPP.directive('xdraggable', function ($document) {
    var startX = 0, startY = 0, x = 0, y = 0;
    return function(scope, element, attr) {
        element.css({
            position: 'relative',
            cursor: 'pointer'
        });
        element.bind('mousedown', function(event) {
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.bind('mousemove', mousemove);
            $document.bind('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }

        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }
    };
});



TodoAPP.directive('tabs', function () {

    function TabsCtrl($scope, $element) {
        var tabs = $scope.tabs = [];

        $scope.activate = function (tab, $event) {
            if ($event) {
                $event.preventDefault();
            }
            angular.forEach(tabs, function (tab1) {
                tab1.selected = false;
            });
            tab.selected = true;
        };

        this.addTab = function (tab) {
            if (!tabs.length) {
                $scope.activate(tab);
            }
            tabs.push(tab);
        };
    }

    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            editAction: '&',
            editActionLabel: '@'
        },
        template: [
        '<div class="tabs">',
        '<ul class="tabs-list group">',
        '<li ng-repeat="tab in tabs" ng-class="{active: tab.selected}">',
        '<a ng-click="activate(tab, $event)">{{tab.title}}</a>',
        '</li>',
        '</ul>',
        '<div class="tab-content" ng-transclude></div>',
        '</div>'
        ].join(''),
        controller: TabsCtrl
    };
});

TodoAPP.directive('tab', function () {
    return {
        require: '^tabs',
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            title: '@title'
        },
        template: '<div class="tabbody" ng-class="{hidden: !selected}" ng-transclude></div>',
        link: function (scope, element, attrs, TabsCtrl) {
            TabsCtrl.addTab(scope);
        }
    };
});

TodoAPP.directive('zippy', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: { title: '@title' },
        template:
            '<div class="zippy {{state}}">' +
                '<div class="title" ng-click="toggle()">{{title}}</div>' +
                '<div class="body" ng-transclude></div>' +
                '</div>',

        link: function(scope, element, attrs) {
            scope.state = "closed";
            scope.toggle = function() {
                scope.state = scope.state == 'opened' ? 'closed' : 'opened';
            };

        }
    };
});



TodoAPP.directive("binddate", function () {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {
            $element.datetimepicker({
                format: 'YYYY-MM-DD',
                pickTime: false,
                minDate: $element.val()
            });
        }
    };

});


TodoAPP.directive("commonmodal", function () {
    return {
        restrict: "E",
        replace: true,
        scope: {
            modalid: "@",
            title: "@",
            call: "&"
        },
        transclude: true,
        templateUrl: "common-modal.html"
    };

});

