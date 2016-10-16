import template from './card.partial.html';
import controller from './card.controller';
import './card.css';

let cardComponent = {
  bindings: {
    withActions: '<',
    title: '<',
    image: '<'
  },
  controllerAs: 'vm',
  template,
  controller
};

export default cardComponent;
