module.service('homeService', function ($http, $q) {

	this.newData = function(){
		var deffered = $q.defer();
		 $http.get("./json/info.json").then(function (response){		 
			deffered.resolve(response.data);
		}, function(err){
			deffered.reject(err)
		})
		return deffered.promise;
	}
})