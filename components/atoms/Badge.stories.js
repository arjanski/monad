import Badge from './Badge'
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Components|Badge',
  component: Badge,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Use a badge to highlight and qualify information',
  },
};

// Default

export const Default = () => ({
  title: 'Badge',
  components: { Badge },
  template: `
      <div class="p-6">
          <div class="block w-full">
              <Badge size="small" color="gray" class="mr-4">Small</Badge>
              <Badge size="medium" color="gray" class="mr-4">Medium</Badge>
              <Badge size="large" color="gray" class="mr-4">Large</Badge>
          </div>
          <div class="block w-full mt-4">
              <Badge size="small" color="teal" class="mr-4">Approved</Badge>
              <Badge size="medium" color="teal" class="mr-4">Approved</Badge>
              <Badge size="large" color="teal" class="mr-4">Approved</Badge>
          </div>
          <div class="block w-full mt-4">
              <Badge size="small" color="yellow" class="mr-4">Draft</Badge>
              <Badge size="medium" color="yellow" class="mr-4">Draft</Badge>
              <Badge size="large" color="yellow" class="mr-4">Draft</Badge>
          </div>
          <div class="block w-full mt-4">
          <Badge size="small" color="green" class="mr-4">Beta</Badge>
          <Badge size="medium" color="green" class="mr-4">Beta</Badge>
          <Badge size="large" color="green" class="mr-4">Beta</Badge>
      </div>
      </div>
  `
})

// Narrow Layout

export const NarrowLayout = () => ({
  title: 'Badge',
  components: { Badge },
  template: `
      <div class="p-6 border">
          <div class="block w-full">
              <Badge size="small" color="teal" layout="narrow">Kategorie</Badge>
              <Badge size="medium" color="teal" layout="narrow">Kategorie</Badge>
              <Badge size="large" color="teal" layout="narrow">Kategorie</Badge>
          </div>
      </div>
  `
})

// Knobs
export const Knobs = () => ({
  title: 'Badge',
  components: { Badge },
  props: {
    size: {
      default: select('Size:', ['small', 'medium', 'large'])
    },
    color: {
      default: select('Color:', ['white', 'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'])
    },
    text: {
      default: text('Text:', 'Your text')
    },
    layout: {
      default: select('Layout:', ['default', 'narrow'])
    }
  },
  template: `
      <div class="p-6 border">
          <div class="block w-full">
              <Badge :size="size" :color="color" :layout="layout" class="mr-4"> {{ text }} </Badge>
          </div>
      </div>
  `
})