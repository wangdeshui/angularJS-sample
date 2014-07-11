/// <reference path="../_references.js" />
/// <reference path="TodoApp.js" />
TodoAPP.directive("informer", function() {
    return {
        link: function (scope, element, attrs) {
            
            $(element).mouseenter(function () {
               
                scope.$emit("in", "Oh, I am in");
                scope.$apply();

            });
            
            $(element).mouseleave(function () {
                scope.$broadcast("out", "Oh, I am out");
                scope.$apply();
            });
        }
    };
});

TodoAPP.controller("parentController", function($scope) {
    $scope.$on("in", function(data, message) {
        $scope.in_message = "Cool, I heard you said:" + message;

    });
    
    $scope.$on("out", function (data, message) {
        $scope.out_message = "Cool, I can't" + message;

    });

});


TodoAPP.controller("childController", function ($scope) {
    $scope.$on("in", function (data, message) {
        $scope.in_message = "Cool, I heard you said:" + message;

    });

    $scope.$on("out", function (data, message) {
        $scope.out_message = "Cool, Yes, I received" + message;

    });

});