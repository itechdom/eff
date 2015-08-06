class effectiveFormController {
	constructor($scope,homeService){

		this.name = 'effectiveForm';
		$scope.countries = [];

		//get the list of states and countries here ...
			homeService.getCountries().then(function(countries){
				$scope.countries = countries.RestResponse.result;

				//select the write country

			});
		//when the country changes get the states
		$scope.$watch('contact.country',function(newVal,oldVal){
			homeService.getStates(newVal).success(function(result){
				$scope.states = result.RestResponse.result;
			});
		})

	}
}
export default effectiveFormController;
