// import * as angular from 'angular';

import 'angular-material';
import 'angular-material/angular-material.css';

import card from './card/card.component';

const module = angular.module('sb-angular-material-demo', [
  'ngMaterial'
]);

module.component('card', card);

export default module.name;