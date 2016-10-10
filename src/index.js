import angular from 'angular';

import 'ui-storybook/helpers/ng';

import app from './app/index';

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
