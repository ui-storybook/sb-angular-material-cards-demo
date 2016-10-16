import * as angular from 'angular';
import 'ui-storybook/helpers/ng';
import app from '../src/index';

// Support for hot module reload
// Remove this to turn off auto reload
if (module.hot) {
  module.hot.accept();
} 
 
const mainModule = angular.module('sb', [
  'helper',
  app
]);

let preview = document.createElement('preview-helper');
document.body.appendChild(preview);

angular.element(preview)
  .ready(() => {
    angular.bootstrap(preview, [mainModule.name], { strictDi: false });
  });
