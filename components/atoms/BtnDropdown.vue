<template>
  <div class="relative">
    <button
      :class="classNamesLabel"
      class="focus:outline-none"
      @click="isOpen = !isOpen"
    >{{ item.label }}</button>
    <button
      v-if="isOpen"
      tabindex="-1"
      class="fixed inset-0 z-20 w-full h-full cursor-default"
      @click="isOpen = false"
    ></button>
    <div
      v-if="isOpen"
      class="absolute z-30 w-48 py-2 mt-2 bg-white rounded shadow-xl cursor-pointer"
    >
      <nuxt-link
        v-for="child in item.children"
        :key="child.name"
        :to="child.path"
        :class="classNamesItem"
        class="block px-4 py-2"
      >{{ child.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnDropdown",
  props: {
    /**
    Data object: Expects a button *label* string and *children* array of objects (*name*, *path*)
    */
    item: {
      type: Object,
      required: true,
      default: []
    },
    /**
    Additional CSS classes to be passed into component
    */
    classes: {
      type: String,
      required: false
    },
    /**
    Dropdown button label color (TailwindCSS color class or custom CSS class)
    */
    colorLabel: {
      type: String,
      required: false,
      default: "gray-900"
    },
    /**
    Dropdown item text color (TailwindCSS color class or custom CSS class)
    */
    colorItem: {
      type: String,
      required: false,
      default: "gray-900"
    },
    /**
    Dropdown item text hover color (TailwindCSS color class or custom CSS class)
    */
    colorHoverText: {
      type: String,
      required: false,
      default: "white"
    },
    /**
    Dropdown item background hover color (TailwindCSS color class or custom CSS class)
    */
    colorHoverBg: {
      type: String,
      required: false,
      default: "blue-500"
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    // Dynamic CSS class generation
    classNamesLabel() {
      const {
        colorLabel,
        colorItem,
        colorHoverBg,
        colorHoverText,
        classes
      } = this;
      const classNames = [
        `text-${colorLabel}`,
        `hover:bg-${colorHoverBg}`,
        `hover:text-${colorHoverText}`,
        "py-2 px-2 rounded",
        classes
      ];
      return classNames;
    },
    // Dynamic CSS class generation
    classNamesItem() {
      const {
        colorLabel,
        colorItem,
        colorHoverBg,
        colorHoverText,
        classes
      } = this;
      const classNames = [
        `text-${colorItem}`,
        `hover:bg-${colorHoverBg}`,
        `hover:text-${colorHoverText}`,
        "py-2 px-2",
        classes
      ];
      return classNames;
    }
  }
};
</script>
