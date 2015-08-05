import angular from 'angular';
import effectiveFormComponent from './effectiveForm.component.js';
import angularUi from 'angular-ui-bootstrap';


let effectiveFormModule = angular.module('effectiveForm',[
    angularUi
])
.directive('effectiveForm', effectiveFormComponent)
export default effectiveFormModule;