app.controller('initialCtrl',['$scope', '$location', 'sharedValues', function ($scope, $location, sharedValues) {
    $scope.url = sharedValues.getlocal('url');
    if($scope.url) {
        sharedValues.apicheck().then(function(d){
        if(d.a == 1) {
            $location.path('/login');
        }else{
            $location.path('/config');
        };
        })
    } else {
        $location.path('/config');
    }
}]);

app.controller('configCtrl',['$scope', '$location', 'sharedValues', function ($scope, $location, sharedValues) {    
    $scope.error = false;
    $scope.url = sharedValues.getlocal('url');
    $scope.btnSave = function() {
        sharedValues.setlocal('url', $scope.url);
        sharedValues.setlocal('logged_in', false);
        sharedValues.apicheck().then(function(d){
        if(d.a == 1) {
            $location.path('/login');
        }},function(data) {
            $scope.error = true;
        })
    }
    $scope.btnCancel = function() {
        var l = sharedValues.getlocal('logged_in');
        if(l == 'true'){
            $location.path('/menu');
        }else{
            sharedValues.apicheck().then(function(d){
        if(d.a == 1) {
            $location.path('/login');
        }},function(data) {
            $scope.error = true;
        })
        }
    }
}]);

app.controller('loginCtrl',['$scope', '$location', 'sharedValues', function ($scope, $location, sharedValues) {
    
    //SET $scope.error var to hide error message
    $scope.error = false;
    
    //Catch btnLogin event to login the user
    $scope.btnLogin = function() {
        $scope.error = false;
        var e = $scope.email;
        var p = $scope.password;
        sharedValues.checkuser(e, p).then(function(d){
        if(d.a == 1) {
            sharedValues.setlocal('logged_in', 'true');
            $location.path('/menu');
        }else{
            $scope.error = true;
        }
    })}
}]);

app.controller('menuCtrl',['$scope', '$location', 'sharedValues', function ($scope, $location, sharedValues) {
    $scope.btnConfig = function() {
        $location.path('/config');
    }
    $scope.btnSite = function() {
        $location.path('/site');
    }
    $scope.btnHost = function() {
        $location.path('/host');
    }
    $scope.btnLogout = function() {
        $(".modal-backdrop").hide();
        sharedValues.setlocal('logged_in', 'false');
        $location.path('/login');
    }
}]);

app.controller('hostCtrl',['$scope', '$location', 'sharedValues', function ($scope, $location, sharedValues) {
    sharedValues.gethosts().then(function(d){
        $scope.hosts = d;
    })
    $scope.btnLogout = function() {
        $(".modal-backdrop").hide();
        sharedValues.setlocal('logged_in', 'false');
        $location.path('/login');
    }
    $scope.btnMenu = function() {
        $location.path('/menu');
    }
}]);

app.controller('siteCtrl',['$scope', '$location', 'sharedValues', function ($scope, $location, sharedValues) {
    sharedValues.getsites().then(function(d){
        $scope.sites = d;
    })
    $scope.btnLogout = function() {
        $(".modal-backdrop").hide();
        sharedValues.setlocal('logged_in', 'false');
        $location.path('/login');
    }
    $scope.btnMenu = function() {
        $location.path('/menu');
    }
}]);