class HomeController {

	constructor($scope,homeService){

		this.name = 'home';
		$scope.currentContact = {};
		$scope.contacts = [];

		homeService.getCountries().success(function(countries){
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
			homeService.saveContacts($scope.contacts);
		};

		$scope.$watch('contacts',function(newVal,oldVal){
			//save the contacts once they are changed
			if(newVal === oldVal){
				console.log("same!");
			}
			else{
				console.log("they are different");
				//save the contacts

			}
		},true);


		$scope.$watch('currentContact.country',function(newVal,oldVal){
			//populate the state
			homeService.getStates(newVal).success(function(result){
				$scope.states = result.RestResponse.result;
			});
		});
	}
}

export default HomeController;