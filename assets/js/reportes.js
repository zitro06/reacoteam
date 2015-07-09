var app = angular.module('ReportesModule',[])  ;
app.controller("reportesController",function($scope, $http){
  
    $scope.init = function(){
    	console.log("inicio peticion de ejemplo");
		$http.get("/getDatitos").then(function(result){
        	console.log("resultado de la peticion");
        	console.log(result);
        	$scope.users= angular.copy(result.data);
        	console.log($scope.user);
		});
		console.log("fin peticion de ejemplo");
    }
      
    

   

});