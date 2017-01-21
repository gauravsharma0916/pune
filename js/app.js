var app=angular.module("myApp", ['ngRoute','720kb.datepicker','ui.grid','ngAnimate','ngTouch']);

app.config (function($routeProvider,$locationProvider){

$routeProvider
.when('/kanpur',{
templateUrl:'view/kanpur.html',
controller: 'kanCtrl'
})

.when('/delhi',{
templateUrl:'view/delhi.html'
})

.when('/pune',{
templateUrl:'view/pune.html'
})

.when('/gaurav',{
templateUrl:'view/customForm.html'
})

.when('/update',{
templateUrl:'view/update.html'
})

.when('/facebook',{
templateUrl:'view/facebook.html'
})

.when('/responsive',{
templateUrl:'view/responsive.html'
})

.when('/demopage',{
templateUrl:'view/demoPage.html'
})

.when('/modal',{
templateUrl:'view/modal.html'
})



.when('/divgame',{
templateUrl:'view/divgame.html'
})

.when('/hcl',{
templateUrl:'view/hcl.html'
})

.when('/target',{
templateUrl:'view/target.html'
})

.when('/target1',{
templateUrl:'view/target1.html'
})

.when('/datepicker',{
templateUrl:'view/datepicker.html'
})

.when('/crud',{
templateUrl:'view/crud.html'
})

.when('/muneer',{
templateUrl:'view/muneer.html'
})

.when('/array',{
templateUrl:'view/array.html'
})

.when('/rwd',{
templateUrl:'view/rwd.html'
})

.when('/sapient',{
templateUrl:'view/sapient.html'
})


.when('/grid',{
templateUrl:'view/grid.html'
})


.when('/filter',{
templateUrl:'view/filter.html'
})


.when('/gridconfiger',{
templateUrl:'view/gridconfiger.html'
})

.when('/tablesorting',{
templateUrl:'view/tablesorting.html'
})

.when('/emit',{
templateUrl:'view/emit.html'
})

.otherwise({
	redirectTo:'/delhi'
})

});
