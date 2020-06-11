<template>
  <div>
    <div class="relative hidden w-full lg:block">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2"
        ><svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-500 fill-current">
          <path
            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
          ></path></svg
      ></span>
      <!-- Filter input -->
      <input
        v-if="filter"
        id="grid-first-name"
        v-model="filterQuery"
        class="block w-full px-4 py-3 pl-8 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded appearance-none focus:outline-none focus:bg-white focus:text-gray-900"
        type="text"
        placeholder="Einträge filtern"
      />
    </div>

    <!-- Table -->
    <div
      :style="tableStyle"
      class="overflow-hidden overflow-y-auto rounded-lg shadow-md "
    >
      <table class="w-full bg-white">
        <thead>
          <tr
            class="text-base font-semibold tracking-wide text-gray-600 bg-gray-100 border-gray-300"
          >
            <!-- @slot Table header content -->
            <slot name="header" />
          </tr>
        </thead>
        <tbody>
          <!-- Table rows -->
          <tr
            v-for="item in sortedItems"
            :key="item[keyName]"
            :class="rowClassName"
            class="border-b border-gray-200"
            @click="handleRowClick(item)"
          >
            <!-- @slot Table row content with exposed item data property -->
            <slot name="items" :item="item" />
          </tr>
          <!-- Fallback display when no data present -->
          <tr v-if="itemsFiltered.length === 0">
            <td colspan="2" class="flex w-full p-10 pl-6">
              Keine Daten verfügbar.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/**
 * Responsive, customizable data table.
 * @displayName Data Table
 */

export default {
  name: 'TTable',
  props: {
    /**
     * Add hover background color to table rows
     */
    hover: Boolean,
    /**
     * Add mouse cursor pointer to table rows
     */
    clickable: Boolean,
    /**
     * Table row data
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * Optional custom :key identifier for v-for loop
     */
    keyName: {
      type: String,
      default: 'id'
    },
    /**
     * Enables filter input field
     */
    filter: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the column name to be filtered against (based on column key name)
     */
    filterByColumn: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Column to be currently sorted by
     */
    sortColumn: {
      type: String,
      default: 'title'
    },
    /**
     * Sorting direction (ascending, descending)
     */
    sortDirection: {
      type: String,
      default: 'desc'
    },
    /**
     * Function to be called when user clicks row
     */
    onRowClick: Function,
    /**
     * Sets maximum height of table element. Table content will scroll vertically if not given enough height.
     */
    maxHeight: [String, Number]
  },
  data() {
    return {
      filterQuery: ''
    }
  },
  computed: {
    sortedItems() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.itemsFiltered.sort((a, b) => {
        let modifier = 1
        if (this.sortDirection === 'desc') modifier = -1
        if (a[this.sortColumn] < b[this.sortColumn]) return -1 * modifier
        if (a[this.sortColumn] > b[this.sortColumn]) return 1 * modifier
        return 0
      })
    },
    /**
     * Filters list of items based on user input
     */
    itemsFiltered() {
      const filter = new RegExp(this.filterQuery, 'i')
      // const column = this.filterByColumn
      return this.items.filter((el) => el.title.match(filter))
    },
    /**
     * Sets maximum table height in pixels
     */
    tableStyle() {
      const { maxHeight } = this
      if (!maxHeight) return null
      return {
        maxHeight: `${maxHeight}px`
      }
    },
    /**
     * Sets hover and cursor CSS
     */
    rowClassName() {
      const { clickable, hover } = this
      return {
        'hover:bg-gray-100': hover,
        'cursor-pointer': clickable
      }
    }
  }
}
</script>
