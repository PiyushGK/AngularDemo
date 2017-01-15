module.controller('homeCtrl' , ['$scope', 'homeService', function ($scope, homeService) {
	$scope.name = 'Piyush Kawade'
	$scope.empID = '1241841';
	$scope.companyName = 'TCS';

	

	$scope.saveData = function (inputData){
		homeService.getData(inputData);
	}

}]);