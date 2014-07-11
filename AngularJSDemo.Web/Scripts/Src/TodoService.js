TodoAPP.service("Todo", function ($http, $q) {

    return {
        GetAll: function () {

            var deferred = $q.defer();

            $http.get("/Home/GetAll").success(function (data) {

                deferred.resolve(data);


            }).error(function (data) {

                deferred.reject(data);
            });

            return deferred.promise;

        },

        GetById: function (id) {

            var deferred = $q.defer();

            $http.get("/Home/GetById/" + id).success(function (data) {

                deferred.resolve(data);


            }).error(function (data) {

                deferred.reject(data);
            });

            return deferred.promise;

        },

        Search: function (searchText) {
            console.log(searchText);
            var deferred = $q.defer();

            $http.get("/Home/Search/" + searchText).success(function (data) {

                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });

            return deferred.promise;

        },
        Save: function (item) {
            var deferred = $q.defer();

            $http.post("/Home/AddTodo", item).success(function (data) {

                deferred.resolve(data);
            }).error(function (data) {

                deferred.reject(data);
            });

            return deferred.promise;

        },

        Delete: function (id) {
            var deferred = $q.defer();
            $http.post("/Home/Delete", { id: id }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    };

});