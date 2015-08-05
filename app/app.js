import jQuery from 'jquery';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/components';
import Common from './common/common';


angular.module('app', [
	uiRouter,
	Components.name,
	Common.name
])
.directive('app', AppComponent);