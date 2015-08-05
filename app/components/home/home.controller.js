class HomeController {
	constructor($scope,homeService){

		this.name = 'home';
		$scope.currentContact = {};

		homeService.getContacts().success(function(contacts){
			$scope.contacts = contacts;
		});

		$scope.saveContacts = function(contacts){
			homeService.saveContacts($scope.contacts);
		};

		//watch whenver contacts change and update things acoordingly
		$scope.$watch('contacts',function(newVal,oldVal){

		});

		//update the city or state value
		$scope.$watch('currentContact.country',function(newVal,oldVal){

		});

	}
}

export default HomeController;