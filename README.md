angularJS-sample
================

The sample for training our developers

Tips for Angular.js

1. display Loading
''' javascript
 1 var app = angular.module("MyApp", ["ngResource"]);
 2 
 3 app.config(function ($httpProvider) {
 4   $httpProvider.responseInterceptors.push('myHttpInterceptor');
 5 
 6   var spinnerFunction = function spinnerFunction(data, headersGetter) {
 7     $("#spinner").show();
 8     return data;
 9   };
10 
11   $httpProvider.defaults.transformRequest.push(spinnerFunction);
12 });
13 
14 app.factory('myHttpInterceptor', function ($q, $window) {
15   return function (promise) {
16     return promise.then(function (response) {
17       $("#spinner").hide();
18       return response;
19     }, function (response) {
20       $("#spinner").hide();
21       return $q.reject(response);
22     });
23   };
24 });
'''


