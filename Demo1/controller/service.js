module.service('homeService', function ($http, $q) {
	this.getData = function(test){
		console.log('welcome' + test);
	}

this.callData = function(){
	var data = [
	{name:'Dhan', companyName:'tcs'},
	{name:'Piyush', companyName:'tata'}
	]
	return data;
}
/*this.newData = function(){
	var deffered = $q.defer();
	 $http.get("./json/info.json").then(function (response){		 
		deffered.resolve(response.data);
	}, function(err){
		deffered.reject(err)
	})
	return deffered.promise;
}*/

/*this.newData = function(){
  $http.get("./json/info.json").then(function (response){
		return response;
	})

};*/


})