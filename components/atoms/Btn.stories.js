import Btn from './Btn.vue'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Components|Button',
  component: Btn,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Displays a button',
  },
};

// Default
  export const Default = () => ({
    title: 'Button',
    components: { Btn },
    template: `
    <div class="p-6 border">
        <div class="block w-full mb-2">
            <Btn size="small" layout="transparent">Small</Btn>
        </div>
        <div class="block w-full mb-2">
            <Btn size="medium" layout="transparent">Medium</Btn>
        </div>
        <div class="block w-full mb-6">
            <Btn size="large" layout="transparent">Large</Btn>
        </div>
        <div class="block w-full mb-2">
            <Btn size="small" layout="outline">Small</Btn>
        </div>
        <div class="block w-full mb-2">
            <Btn size="medium" layout="outline">Medium</Btn>
        </div>
        <div class="block w-full mb-6">
            <Btn size="large" layout="outline">Large</Btn>
        </div>
        <div class="block w-full mb-2">
            <Btn size="small" layout="filled" color="blue">Small</Btn>
        </div>
        <div class="block w-full mb-2">
            <Btn size="medium" layout="filled" color="blue">Medium</Btn>
        </div>
        <div class="block w-full mb-2">
            <Btn size="large" layout="filled" color="blue">Large</Btn>
        </div>
    </div>
`,
})

// Knobs
export const Knobs = () => ({
    title: 'Button',
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
          default: select('Layout:', ['transparent','outline','filled'])
        },
        disabled: {
            default: boolean('Disabled:', false)
        }
    },
    components: { Btn },
    template: `
    <div class="p-6">
        <div class="flex items-center justify-center h-screen">
            <Btn :size="size" :color="color" :text="text" :layout="layout" :disabled="disabled"> {{ text }} </Btn>
        </div>
    </div>
`,
})