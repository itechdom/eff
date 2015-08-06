class HomeController {
	constructor($scope,homeService){

		this.name = 'home';
		$scope.currentContact = {};
		$scope.contacts = [];

		homeService.getCountries().then(function(countries){
			$scope.countries = countries.RestResponse.result;
		});

		homeService.getContacts().then(function(contacts){
			if(contacts) {
				$scope.contacts = contacts;
			}
		});

		$scope.addContacts = function(){
			homeService.saveContacts($scope.currentContact).then(function(key){
				$scope.contacts[key] = $scope.currentContact;
			});

		};

		$scope.updateContacts = function(contacts){
			homeService.updateContacts($scope.contacts);
		};
	}
}

export default HomeController;