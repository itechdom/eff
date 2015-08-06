class effectiveFormController {
	constructor($scope,homeService){

		this.name = 'effectiveForm';
		var main = this;
		$scope.countries = [];

		//get the list of states and countries here ...
		homeService.getCountries().then(function(countries){
			$scope.countries = countries.RestResponse.result;
			if($scope.contact.selectedCountry){
				var index = $scope.contact.selectedCountry;
				console.log($scope.countries);
				var code = $scope.countries[index].alpha3_code;
				homeService.getStates(code).success(function(result){
					$scope.states = result.RestResponse.result;
				});
			}
			//select the write country
		});

		$scope.getStates = function(){
			var index = $scope.contact.selectedCountry;
			console.log($scope.countries);
			var code = $scope.countries[index].alpha3_code;
			homeService.getStates(code).success(function(result){
				$scope.states = result.RestResponse.result;
			});
		};

	}
}
export default effectiveFormController;
