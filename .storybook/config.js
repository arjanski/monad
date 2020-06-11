import { configure, addParameters, addDecorator } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'
import Vue from 'vue';
import monadTheme from './monadTheme'
import '../assets/css/main.css'
// const MonadLogo = require('./assets/logo.jpg')

addDecorator(withA11y);

// Viewport Addon
const newViewports = {
  sm: {
    name: 'Small (Tailwind)',
    styles: {
      width: '640px',
      height: '963px',
    },
  },
  md: {
    name: 'Medium (Tailwind)',
    styles: {
      width: '768px',
      height: '801px',
    },
  },
  lg: {
    name: 'Large (Tailwind)',
    styles: {
      width: '1024px',
      height: '801px',
    },
  },
  xl: {
    name: 'Extralarge (Tailwind)',
    styles: {
      width: '1280px',
      height: '801px',
    },
  },
};

addParameters({ docs: { inlineStories: true } });

// Backgrounds Addon
addParameters({
  backgrounds: [
    { name: 'White', value: 'white', default: true },
    { name: 'Gray 100', value: '#F7FAFC' },
    { name: 'Gray 200', value: '#EDF2F7' },
    { name: 'Gray 300', value: '#E2E8F0' },
    { name: 'Gray 400', value: '#CBD5E0' },
    { name: 'Gray 500', value: '#A0AEC0' },
    { name: 'Gray 600', value: '#718096' },
    { name: 'Gray 700', value: '#4A5568' },
    { name: 'Gray 800', value: '#2D3748' },
    { name: 'Gray 900', value: '#1A202C' },
    { name: 'Black', value: 'black' },
  ],
});

// Monad storybook custom theme
addParameters({
  options: {
    theme: monadTheme,
    // brandImage: MonadLogo
  },
});

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})
function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(require.context('../components', true, /\.stories\.(js|mdx)$/), module);