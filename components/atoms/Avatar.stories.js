import Avatar from './Avatar'
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
    title: 'Components|Avatar',
    component: Avatar,
    decorators: [withKnobs],
    parameters: {
      componentSubtitle: 'An avatar'
    }
  };

// Default
const itemDefault = [
    {
        imageUrl: 'images/leibniz_small.jpg',
        imageAlt: 'Bildnis des Philosophen Leibniz',
        imageLicense: 'Quelle: Christoph Bernhard Francke: Portrait of Gottfried Wilhelm Leibniz, [CC 0]'
    },
    {
        imageUrl: 'images/kant.jpg',
        imageAlt: 'Bildnis des Philosophen Kant',
        imageLicense: 'Quelle: Johann Rosario @Dribble (https://dribbble.com/shots/3573162-Immanuel-Kant)'
    },
    {
        imageUrl: 'images/descartes.jpg',
        imageAlt: 'Bildnis des Philosophen Descartes',
        imageLicense: 'Quelle: Johann Rosario @Dribble (https://dribbble.com/shots/3510668-Ren-Descartes)',
    }
]

  export const Default = () => ({
    title: 'Avatar',
    components: { Avatar },
    template: `
        <div class="p-6">
            <div class="block w-full mb-2">
                <Avatar size="small" :items="itemDefault" />
            </div>
            <div class="block w-full mb-2">
                <Avatar size="medium" :items="itemDefault" />
            </div>
            <div class="block w-full mb-2">
                <Avatar size="large" :items="itemDefault" />
            </div>
        </div>
    `,
    data: () => ({ itemDefault })
})

export const Knobs = () => ({
    title: 'Avatar',
    components: { Avatar },
    props: {
        size: {
            default: select('Size:', ['small', 'medium', 'large'])
        }
    },
    template: `
        <div class="flex items-center justify-center h-screen">
                <Avatar :size="size" :items="itemDefault" />
        </div>
    `,
    data: () => ({ itemDefault })
})