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
  })
