

TodoAPP.filter("dateformat", function () {
    return function(value) {
        return new Date(parseInt(value)).toLocaleString();
    };
});

TodoAPP.filter("status", function () {
    return function (value) {
        switch (value) {
            case 0:
                return "Not Started";
            case 1:
                return "InProgress";
            case 2:
                return "Done";
            default:
                return "Not Started";
        }
    };

});