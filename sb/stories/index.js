import 'ui-storybook/sb';
import 'ui-storybook/stories';

let overview = sb.section('Material cards');
overview.story('Basic card')
  .add('Card', '<card title="vm.title" image="vm.image" with-actions="vm.withActions"></card>', {
    title: 'City of Dreams',
    image: 'https://unsplash.it/400/215/?random',
    withActions: false
  })
  .add('Card with actions', '<card title="vm.title" image="vm.image" with-actions="vm.withActions"></card>', {
    title: 'City of Dreams',
    image: 'https://unsplash.it/400/215/?random',
    withActions: true
  });

let cardGrid = `
  <md-content class="md-padding" layout-xs="column" layout="row">
      <card ng-repeat="card in vm.cards" title="card.title" image="card.image" with-actions="card.withActions"></card>
  </md-content>
`;

let overviewGrid = sb.section('Material cards grid');
overviewGrid.story('Basic Grid')
  .add('Grid', cardGrid, {
    cards: [
      {
        title: 'City of Dreams',
        image: 'https://unsplash.it/400/215/?random',
        withActions: true
      },
      {
        title: 'City of Dreams',
        image: 'https://unsplash.it/400/215/?random',
        withActions: false
      },
      {
        title: 'City of Dreams',
        image: 'https://unsplash.it/400/215/?random',
        withActions: true
      },
      {
        title: 'City of Dreams',
        image: 'https://unsplash.it/400/215/?random',
        withActions: false
      }
    ]
  });
