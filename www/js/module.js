var app = angular.module("lantrak", ['ngRoute'])
.service('sharedValues', ['$http', function($http) {
    
    return {
        getlocal: function(key) {
            return localStorage.getItem(key);
        },
        setlocal: function(key, val) {
            localStorage.setItem(key, val);
        },
        checkuser: function(e, p) {
            var url = localStorage.getItem('url');
            var promise = $http.get(url + 'api/user_check/?email=' + e + '&password=' + p).then(function (response) {
            return response.data;
        });
            return promise;
        },
        apicheck: function() {
            var url = localStorage.getItem('url');
            var promise = $http.get(url + 'api/api_check/').then(function (response) {
            return response.data;
        });
            return promise;
        },
        gethosts: function() {
            var url = localStorage.getItem('url');
            var promise = $http.get(url + 'api/get_hosts/').then(function (response) {
            return response.data;
        });
            return promise;
        },
        getsites: function() {
            var url = localStorage.getItem('url');
            var promise = $http.get(url + 'api/get_sites/').then(function (response) {
            return response.data;
        });
            return promise;
        }
    }
    
}]);