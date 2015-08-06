import template from './effectiveForm.html';
import controller from './effectiveForm.controller.js';

let effectiveFormComponent = function ($compile,$http) {
    var dir = {
        template,
        controller,
        link: function (scope, elem, attrs) {
        },
        replace:true,
        restrict: 'E',
        scope: {
            contact: "=",
            submit:"&onSubmit",
            index:"="
        }
    };
    return dir;
};

export default effectiveFormComponent;
