<template>
  <div class="antialiased cursor-pointer" style="width: 300px">
    
    <!-- Style: Default -->
    <div v-if="layout === 'default'">
      <div class="max-w-sm overflow-hidden rounded shadow-lg">
        <!-- Image -->
        <div class="relative bg-gray-400" style="min-height: 238px">
          <img class="w-full h-auto" :src="imagePath(item.imageUrl)" :alt="item.imageAlt" />
          <!-- License button -->
          <button
            name="licenseButton"
            type="button"
            @click="licenseIsOpen = !licenseIsOpen"
            class="absolute bottom-0 right-0 pb-2 pr-2 focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-gray-700 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zM9 11v4h2V9H9v2zm0-6v2h2V5H9z"
              />
            </svg>
            <span class="screen-reader">License</span>
            <div class="relative">
              <div
                v-if="licenseIsOpen"
                class="absolute top-0 right-0 z-20 w-48 py-2 mt-2 bg-gray-800 rounded-lg shadow-md"
              >
                <p class="p-2 font-sans text-xs text-left text-white">{{ item.imageLicense }}</p>
              </div>
            </div>
          </button>
          <button
            v-if="licenseIsOpen"
            @click="licenseIsOpen = false"
            class="fixed inset-0 w-full h-full cursor-default"
          ></button>
        </div>
        <!-- Text Box -->
        <div class="px-6 py-4 bg-white" style="height: 200px">
          <!-- Category -->
          <Badge size="sm" color="teal" class="mb-1">{{ item.category }}</Badge>
          <!-- Title -->
          <div class="mb-2 text-xl font-bold">{{ item.title }}</div>
          <!-- Teaser -->
          <p class="text-base text-gray-700">{{ item.teaser }}</p>
        </div>
        <!-- Tags -->
        <div class="px-6 py-4 bg-white">
          <Badge v-for="tag in item.tags" size="md" color="gray" class="mr-4" :key="tag.tag">{{ tag }}</Badge>
        </div>
      </div>
    </div>

    <!-- Layout: Overlap -->
    <div v-if="layout === 'overlap'">
      <!-- Image -->
      <div class="pb-5/6">
        <img :src="imagePath(item.imageUrl)" class="object-cover rounded-lg shadow-lg" :alt="item.imageAlt" />
      </div>
      <!-- Text Box -->
      <div class="relative px-4">
        <div class="p-6 -mt-24 bg-white rounded-lg shadow-lg">
          <div class="flex items-baseline mb-1">
            <!-- Category -->
            <Badge size="sm" color="teal" layout="narrow">{{ item.category }}</Badge>
          </div>
          <!-- Title -->
          <h4 class="mb-2 text-xl font-bold">{{ item.title }}</h4>
          <!-- Teaser -->
          <div class="mt-1 text-base text-gray-700">{{ item.teaser }}</div>
          <!-- Tags -->
          <div class="pt-4">
            <Badge v-for="tag in item.tags" size="md" color="gray" class="mr-4" :key="tag.tag">{{ tag }}</Badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Badge from '@/components/atoms/Badge.vue'

export default {
  name: "Card",
  props: {
    /**
    Array of objects containing card image, title, tags, teaser text and URL 
    */
    item: {
      type: Object,
      required: true,
      default: () => {}
    },
    /**
    Layout options: text block can be displayed underneath the image (*default*) or overlapping the image (*overlap*).
    */
    layout: {
      type: String,
      required: false,
      default: "default"
    }
  },
  components: {
    Badge
  },
  data() {
    return {
      licenseIsOpen: false
    };
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
};
</script>

<style>
/**
 * Visually hide an element, but leave it available for screen readers
 * @link https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/main.css
 * @link http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
 */
.screen-reader {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
