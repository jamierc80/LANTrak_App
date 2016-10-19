app.config(function($routeProvider) { 
    $routeProvider
    .when("/", {
        templateUrl : "partials/initial.html",
        controller  : "initialCtrl"
    })
    .when("/config", {
        templateUrl : "partials/config.html",
        controller  : "configCtrl"
    })
    .when("/login", {
        templateUrl : "partials/login.html",
        controller  : "loginCtrl"
    })
    .when("/menu", {
        templateUrl : "partials/menu.html",
        controller  : "menuCtrl"
    })
    .when("/host", {
        templateUrl : "partials/host.html",
        controller  : "hostCtrl"
    })
    .when("/site", {
        templateUrl : "partials/site.html",
        controller  : "siteCtrl"
    })
    .otherwise({
        templateUrl : "partials/initial.html",
        controller  : "initialCtrl"
    });  
});