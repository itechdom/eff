class HomeController {
	constructor($scope,$timeout,homeService){
		this.name = 'home';

	homeService.getContacts().success(function(slides){
		$scope.slides = slides;
	})
	}
}

export default HomeController;