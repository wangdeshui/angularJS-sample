describe('test directives', function () {
    beforeEach(module('TodoApp'));
    describe('app-version', function () {
        it('should print current version', function ($injector) {
            //module(function ($provide) {
            //    $provide.value('version', 'TEST_VER');
            //});
            //var inject = $injector;
            ////inject.inject = ["$compile", "$rootScope"];
            //var $compile = inject.g("$compile");
            //var $rootScope = inject.get("$rootScope");
            //var element = $compile('<span app-version></span>')($rootScope);
            //expect(element.text()).toEqual('TEST_VER');

        });
    });

    describe('copyright', function () {
        it('should print current copyright', function () {
            inject(function ($compile, $rootScope) {
                var element = $compile('<span copyright></span>')($rootScope);
                expect(element.text()).toEqual('coppyright 2014 offshore3');
            });
        });
    });
    describe('zippy', function () {
        it('should show zippy', function () {
            inject(function ($compile, $rootScope) {
                $rootScope.state = 'closed';
                var element = $compile('<zippy title="------level2"></zippy>')($rootScope);
                $rootScope.$digest();
                var selects = element.find('div');
                expect(selects.length).toEqual(3);
                expect($('.title', element).text()).toEqual("------level2");
                expect($('.zippy', element).hasClass("closed")).toEqual(true);

                $('.title', element).click();
                expect($('.zippy', element).hasClass("opened")).toEqual(true);
            });

        });
    });
});
