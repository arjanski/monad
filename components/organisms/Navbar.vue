<template>
  <div
    :class="classNames"
    class="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <!-- Logo -->
      <nuxt-link to="/">
        <img
          class="h-8"
          :src="imagePath(logo.imageUrl)"
          :alt="logo.imageAlt"
        />
      </nuxt-link>
      <!-- Mobile Menu -->
      <div class="sm:hidden">
        <button
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Desktop Menu -->
    <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
      <div class="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <nuxt-link
          v-for="item in items"
          :key="item.name"
          :to="{ path: item.path }"
          class="flex pl-3 align-middle"
        >
          <BtnDropdown v-if="item.children" :item="item" :colorLabel="colorLabel" :colorItem="colorItem" :colorHoverBg="colorHoverBg" :colorHoverText="colorHoverText" />
          <Btn v-else layout="simple" size="sm" :color="colorLabel">{{ item.name }}</Btn>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
/**
 *  Navbar displaying buttons / dropdown buttons for nested array of objects input.
 */
import BtnDropdown from '@/components/atoms/BtnDropdown'
import Btn from '@/components/atoms/Btn'

export default {
  name: 'Navbar',
  components: {
    BtnDropdown,
    Btn
  },
  props: {
    /**
     * Array of objects containing button structure.
     * Simple buttons expect keys 'name' and 'path'.
     * Dropdown buttons expect keys 'name' and 'children' (no 'path' on root level), with nested items expecting 'name' and 'path' keys.
     */
    items: {
      type: Array,
      required: true
    },
    /**
    Navbar background color (TailwindCSS color class or custom CSS class)
    */
    colorBg: {
      type: String,
      required: false,
      default: 'gray-900'
    },
    /**
    Dropdown button label color (TailwindCSS color class or custom CSS class)
    */
    colorLabel: {
      type: String,
      required: false,
      default: 'white'
    },
    /**
    Button/Dropdown text color (TailwindCSS color class or custom CSS class)
    */
    colorItem: {
      type: String,
      required: false,
      default: 'white'
    },
    /**
    Button/Dropdown text hover color (TailwindCSS color class or custom CSS class)
    */
    colorHoverText: {
      type: String,
      required: false,
      default: 'white'
    },
    /**
    Button/Dropdown background hover color (TailwindCSS color class or custom CSS class)
    */
    colorHoverBg: {
      type: String,
      required: false,
      default: 'blue-500'
    },
    /**
    Logo object containing *imageUrl* and *imageAlt*
    */
    logo: {
      type: Object,
      required: false
    },
    /**
    Additional CSS classes to be passed into component
    */
    classes: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    // Dynamic CSS class generation
    classNames() {
      const { colorBg, classes } = this
      const classNames = [
        `bg-${colorBg}`,
        classes
      ]
      return classNames
    }
  },
  methods: {
      // Request image as a webpack module by using `require`
      imagePath(filename) {
          if (!filename) {
              return;
          }
          var path
          try {
              path = require(`@/assets/${filename}`)
          } catch (e) {
                  console.log("😨Card component error: Cannot find image file at path",filename,"in @assets folder.")
                  // throw e;
          }
          return path
          // return require(`@/assets/${filename}`);
      }
  }  
}
</script>
