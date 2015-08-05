class HomeController {
	constructor($scope,homeService){

		this.name = 'home';
		$scope.currentContact = {};

		homeService.getCountries().success(function(countries){
			console.log(countries);
			$scope.countries = countries.RestResponse.result;
		});

		homeService.saveContacts({"hello":"hi"});

		$scope.saveContacts = function(contacts){
			homeService.saveContacts($scope.contacts);
		};

		//watch whenver contacts change and update things acoordingly
		$scope.$watch('contacts',function(newVal,oldVal){
		});

		//update the city or state value
		$scope.$watch('currentContact.country',function(newVal,oldVal){
			//populate the state
			homeService.getStates(newVal).success(function(result){
				$scope.states = result.RestResponse.result;
			});
		});
	}
}

export default HomeController;