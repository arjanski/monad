import Card from './Card.vue'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components|Card',
  component: Card,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Displays an image card with teaser text and tags',
  },
};

// Default
const itemDefault =    {
        imageUrl: 'images/kant.jpg',
        imageAlt: 'Bildnis des Philosophen Leibniz (ca. 1695)',
        imageLicense: 'Quelle: Christoph Bernhard Francke: Portrait of Gottfried Wilhelm Leibniz, [CC 0]',
        title: 'Title',
        category: 'Kategorie',
        tags: ['#Tag', '#Another Tag'],
        teaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada quis felis nec efficitur. Cras vitae sem a massa lobortis viverra at sit amet mi.',
        path: '#'
    }

export const Default = () => ({
  title: 'Card',
  components: { Card },
  template: '<div class="flex items-center justify-center h-screen"><Card :item="itemDefault" /></div>',
  data: () => ({ itemDefault }),
})

// Multiple Cards

const itemMultiple =    [{
    imageUrl: 'images/kant.jpg',
    imageAlt: 'Portrait of Immanuel Kant',
    imageLicense: 'Quelle: Johann Rosario @Dribble (https://dribbble.com/shots/3573162-Immanuel-Kant)',
    title: 'Immanuel Kant',
    category: 'Philosophy',
    tags: ['#Epistemology', '#Morals'],
    teaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    path: '#'
},
{
    imageUrl: 'images/descartes.jpg',
    imageAlt: 'Portrait of René Descartes',
    imageLicense: 'Quelle: Johann Rosario @Dribble (https://dribbble.com/shots/3510668-Ren-Descartes)',
    title: 'René Descartes',
    category: 'Philosophy',
    tags: ['#Cartesianism', '#Dualism'],
    teaser: 'This portrait of René Descartes is a carefully plotted face-mapped averaging of four known portraits that may begin to capture a closer semblance of his appearance.',
    path: '#'
}]

// Multiple Cards
export const MultipleCards = () => ({
  title: 'Card',
  components: { Card },
  template: '<div class="flex items-center justify-center h-screen"><Card v-for="item in itemMultiple" :item="item" class="mr-12" :key="item.imageUrl" /></div>',
  data: () => ({ itemMultiple }),
})

// Overlap Item
const itemOverlap =    {
  imageUrl: 'images/leibniz.jpg',
  imageAlt: 'Bildnis des Philosophen Leibniz (ca. 1695)',
  imageLicense: 'Quelle: Christoph Bernhard Francke: Portrait of Gottfried Wilhelm Leibniz, [CC 0]',
  title: 'Gottfried Wilhelm Leibniz',
  category: 'Philosophy',
  tags: ['#Monadology'],
  teaser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  path: '#'
}

// Overlap Layout
export const OverlapLayout = () => ({
  title: 'Card',
  components: { Card },
  template: '<div class="flex items-center justify-center h-screen"><Card :item="itemOverlap" layout="overlap" /></div>',
  data: () => ({ itemOverlap }),
})

// Knobs
export const Knobs = () => ({
  title: 'Card',
  props: {
    title: {
      default: text('Title:', 'Title')
    },
    teaser: {
      default: text('Teaser:', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada quis felis nec efficitur. Cras vitae sem a massa lobortis viverra at sit amet mi.')
    },
    category: {
      default: text('Category:', 'Category')
    },
    tags: {
      default: text('Tag', '#Tagname')
    },
    imageLicense: {
      default: text('Image License:', 'Source: ')
    },
    imageAlt: {
      default: text('Image Alternative Text:', 'Alternative Text')
    }
  },
  components: { Card },
  template: `
    <div class="flex items-center justify-center h-screen">
      <Card 
        :item="{
          imageUrl: 'images/kant.jpg',
          imageAlt: $props.imageAlt,
          imageLicense: $props.imageLicense,
          title: $props.title,
          category: $props.category,
          tags: [$props.tags],
          teaser: $props.teaser,
          path: '#'
        }" 
      />
    </div>`
})