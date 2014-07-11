describe("Home controller test", function () {
    beforeEach(module("TodoApp"));
    describe("controller", function () {
        var scope;
        var controller;
        var todoService;
        var httpBackend;
        var todoItems = [{ Id: "1", Name: "Eric", Description: "Test", Date: "2014-01-10", Status: 1 }, { Id: "2", Name: "Eric", Description: "Test", Date: "2014-01-10", Status: 1 }];
        var todo = { Id: "1", Name: "Eric", Description: "Test", Date: "2014-01-10", Status: 1 };
        //var todoData=
        beforeEach(inject(function ($rootScope, $controller, $httpBackend, Todo) {
            scope = $rootScope;
            controller = $controller("HomeController", { $scope: scope });
            todoService = Todo;
            httpBackend = $httpBackend;
        }));

        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        var mockTodoItems = function () {
            httpBackend.whenGET('/Home/GetAll').respond(function (method, url, data) {
                return [200, todoItems, {}];
            });
            
        };

        var mockGetTodoById = function(id) {
            httpBackend.expectGET('/Home/GetById/' + id).respond(200, todo);
        };

        it("should return all todo items", function () {
            mockTodoItems();
            scope.getAll();
            httpBackend.flush();
            expect(scope.TodoItems.length).toEqual(2);
        });

        it("should return one items", function () {
            mockGetTodoById(1);
            scope.getById(1);
            httpBackend.flush();
            
            expect(scope.currentItem.Id).toEqual('1');
            expect(scope.currentItem.Name).toEqual("Eric");
        });
    });
});