import 'ui-storybook/sb';
import 'ui-storybook/stories';

// {
//       title: 'Demo button',
//       image: 'https://unsplash.it/400/215/?random'
//     }

let overview = sb.section('Material cards');
var e = overview.story('Basic card')
  .add('Card', '<card title="vm.title" image="vm.image" actions="vm.actions"></card>', {
    title: 'City of Dreams',
    image: 'https://unsplash.it/400/215/?random',
    actions: false
  })
  .add('Card with actions', '<card title="vm.title" image="vm.image" actions="vm.actions"></card>', {
    title: 'City of Dreams',
    image: 'https://unsplash.it/400/215/?random',
    actions: true
  })
