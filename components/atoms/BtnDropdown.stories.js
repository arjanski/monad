import BtnDropdown from './BtnDropdown.vue'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Components|Button Dropdown',
  component: BtnDropdown,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Displays a button with popup menu',
  },
};

// Default

const itemDefault =    {
    label: 'Dropdown',
    children: [
      {
        name: 'Child Item 1',
        path: '#'
      },
      {
        name: 'Child Item 2',
        path: '#'
      },
      {
        name: 'Child Item 3',
        path: '#'
      },
      {
        name: 'Child Item 4',
        path: '#'
      }
    ]
  };

  export const Default = () => ({
    title: 'Button Dropdown',
    components: { BtnDropdown },
    template: '<div style="height: 250px"  class="p-6"><div class="w-40"><BtnDropdown :item="itemDefault" colorLabel="blue"></BtnDropdown /></div></div>',
    data: () => ({ itemDefault }),
})

// Multiline

const itemMultiline = {
    label: 'Dropdown',
  children: [
      {
        name: 'A very long child item label spanning multiple lines',
        path: '#'
      },
    {
        name: 'Child Item 2',
         path: '#'
     }
   ]
   };

export const MultilineButtonLabel = () => ({
    title: 'Button Dropdown',
     components: { BtnDropdown },
   template: '<div style="height: 250px" class="p-6"><div class="w-40"><BtnDropdown :item="itemMultiline"></BtnDropdown /></div></div>',
    data: () => ({ itemMultiline }),
})

// Custom color

export const CustomColors = () => ({
  title: 'Button Dropdown',
   components: { BtnDropdown },
 template: '<div style="height: 250px" class="p-6"><div class="w-40"><BtnDropdown :item="itemDefault" colorText="gray-900" colorHoverBg="pink-500" colorHoverText="white"></BtnDropdown /></div></div>',
  data: () => ({ itemDefault }),
})

// Knobs
export const Knobs = () => ({
  title: 'Button Dropdown',
  components: { BtnDropdown },
  props: {
    colorItem: {
      default: text('colorItem:', 'gray-900')
    },
    colorLabel: {
      default: text('colorLabel:', 'gray-900')
    },
    colorHoverBg: {
      default: text('colorHoverBg:', 'blue-500')
    },
    colorHoverText: {
      default: text('colorHoverText:', 'white')
    }
  },
  template: `<div class="flex items-center justify-center h-screen">
              <BtnDropdown :item="itemDefault" :colorLabel="colorLabel" :colorItem="colorItem" :colorHoverBg="colorHoverBg" :colorHoverText="colorHoverText" />
            </div>`,
  data: () => ({ itemDefault }),
})














