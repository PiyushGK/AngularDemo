module.controller('homeCtrl' , ['$scope', 'homeService', function ($scope, homeService) {


	homeService.newData().then(function(response){
		$scope.test = response;
	})

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
		$scope.newContact = {};
	}
	

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
                $scope.newContact = angular.copy($scope.contacts[i]);
            }
		}
	}
	
}]);