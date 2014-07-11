/// <reference path="../_references.js" />

var TodoItem = {
    Id: "",
    Name: "",
    Description: "",
    Date: "2014-6-20",
    Status: 0,
};

var TodoAPP = angular.module("TodoApp", []);


TodoAPP.controller("HomeController", function ($scope, $http, Todo) {

    $scope.DeletedId = 0;
    $scope.filterfield = "Id";
    $scope.reverse = true;
    $scope.TodoItems = null;
    $scope.currentItem = null;
    
    $scope.getAll = function () {
        Todo.GetAll().then(function (data) {
            $scope.TodoItems = data;
        });
    };


    $scope.search = function () {
        Todo.Search($scope.searchText).then(function (data) {
            $scope.TodoItems = data;
        });
    };

    $scope.getById = function (id) {
        Todo.GetById(id).then(function (data) {
            $scope.currentItem = data;
        });
    };
    $scope.addNewTodo = function () {
        $scope.TodoItem = angular.copy(TodoItem);
        $("#todo-modal").modal();
    };

    $scope.edit = function (item) {
        $scope.TodoItem = angular.copy(item);
        $scope.TodoItem.Date = new Date(parseInt($scope.TodoItem.Date.substr(6)));
        console.log(item);
        $("#todo-modal").modal();
    };


    $scope.sort = function (data) {
        $scope.filterfield = data;
        $scope.reverse = !$scope.reverse;

    };

    // Should move this Dom operation to Directive
    $scope.OpenDelete = function (itemId) {
        $scope.DeletedId = itemId;
        $("#deleteTodoItem").modal();
    };


    $scope.currentPageIndex = 1;

    // Mock page count
    $scope.pages = [];
    for (var i = 1; i < 20; i++) {
        $scope.pages.push(i);
    }

    $scope.Delete = function () {
        Todo.Delete($scope.DeletedId).then(function (data) {
            $scope.getAll();
            $("#deleteTodoItem").modal('hide');
        });

    };

    $scope.page = function (item) {
        $scope.currentPageIndex = item;
    };

    $scope.nextPage = function () {
        if ($scope.currentPageIndex < 20) {
            $scope.currentPageIndex++;
            $scope.page($scope.currentPageIndex);
        }
    };

    $scope.previousPage = function () {
        if ($scope.currentPageIndex > 0) {
            $scope.currentPageIndex--;
            $scope.page($scope.currentPageIndex);
        }
    };

    $scope.firstPage = function () {
        return $scope.currentPageIndex == 1;
    };

    $scope.lastPage = function () {
        return $scope.currentPageIndex == $scope.pages.length;
    };


    $scope.AllStatus = [{ value: 0, Text: "NotStarted" }, { value: 1, Text: "InProgress" }, { value: 2, Text: "Done" }];

    $scope.Save = function () {

        Todo.Save($scope.TodoItem).then(function (data) {

            $scope.TodoItems = data;
            console.log($scope.TodoItems);

            $scope.TodoItem = TodoItem;
            $("#todo-modal").modal('hide');
        });
    };
});









