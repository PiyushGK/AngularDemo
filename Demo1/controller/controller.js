module.controller('homeCtrl' , ['$scope', 'homeService','$http', function ($scope, homeService, $http) {
	/*$scope.name = 'Piyush Kawade'
	$scope.empID = '1241841';
	$scope.companyName = 'TCS';


	$scope.saveData = function (inputData){
		homeService.getData(inputData);
	}
	 
	$http.get("./json/info.json").then(function (response){
		$scope.dk = response.data;
	})
*/
	var uid = 1;

	$scope.contacts=[{
		'id' : 0,
		'name':'Piyush',
		'email':'Kawadepiyush@gamil.com',
		'phoneNo':'9689656986'
	}];

	$scope.saveContact = function(){
		if ($scope.newContact.id == null) {
			$scope.newContact.id = uid++ ;
			$scope.contacts.push($scope.newContact);
		}
		else{
			for(i in $contacts){
				$scope.contacts[i].id == $scope.newContact[i].id ;
				$scope.contacts[i] == $scope.newContact ;
			}
		}
	}
	$scope.newContact = {};

	$scope.deleteContact = function(id) {
		for(i in $scope.contacts){
			if($scope.contacts[i].id == id){
				$scope.contacts.splice(i ,1);
				$scope.newContact = {};
			}
		}
	}

	$scope.editContact =function (id){
		for(i in $scope.contacts){
			if($scope.contacts[i].id == id) {
            	//we use angular.copy() method to create 
            	//copy of original object
                $scope.newcontact = angular.copy($scope.contacts[i]);
            }
		}
	}
	
}]);