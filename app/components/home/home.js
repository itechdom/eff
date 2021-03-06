import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeService from './home.service';
import angularUi from 'angular-ui-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let homeModule = angular.module('home', [
	uiRouter,angularUi
])
.config(($stateProvider, $urlRouterProvider)=>{
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		});
})
.directive('home', homeComponent)
	.service('homeService',homeService)

export default homeModule;