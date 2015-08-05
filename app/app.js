import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/components';
import 'normalize.css';

angular.module('app', [
	uiRouter,
	Components.name
])
.directive('app', AppComponent);