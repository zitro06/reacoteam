 /**
   agregar aqui todos los controller que se necesitan para la aplicacion
 */

 var app = angular.module("ReacoApp",['ngRoute','ReportesModule']);
app.config(function( $routeProvider, $locationProvider){
	 $routeProvider.when('/', {templateUrl: 'pages/inicio.html'});
     $routeProvider.when('/orderCollection', {templateUrl: 'pages/ordercollection/generarOrden.html'});
     $routeProvider.when('/reporte1', {templateUrl: 'pages/reports/reporte1.html'});
     $routeProvider.when('/reporte2', {templateUrl: 'pages/reports/reporte2.html'});
     $routeProvider.when('/reporte3', {templateUrl: 'pages/reports/reporte3.html'});
})
app.controller("ReacoController",function($scope ){
   
});

