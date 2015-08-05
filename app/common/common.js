import angular from 'angular';
import effectiveForm from './effectiveForm/effectiveForm';


let commonModule = angular.module('app.common', [
	effectiveForm.name
]);

export default commonModule;