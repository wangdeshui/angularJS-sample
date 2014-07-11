

describe('filter', function () {
    beforeEach(module('TodoApp'));
    describe('status', function () {
        it('should replace number', inject(function (statusFilter) {
            expect(statusFilter(1)).toEqual('InProgress');
        }));
    });
    describe('dateformat', function () {
        it('should format the date', inject(function (dateformatFilter) {
            expect(dateformatFilter('1403193600000')).toEqual(new Date(parseInt('1403193600000')).toLocaleString());
        }));
    });
});
