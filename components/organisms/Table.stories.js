import Table from './Table.vue'

export default {
  title: 'Components|Table',
  component: Table,
  docgen: 'Test',
  parameters: {
    componentSubtitle: 'Responsive data table with filter and column sort',
  },
};

// Default

const itemsDefault = [
    {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
]

const tableSort = {
    activeColumn: 'title',
    activeDirection: 'asc'
}

const tableLayout = [
    {
      name: 'title',
      label: 'Sortable column1',
      sortable: true
    },
    {
      name: 'id',
      label: 'Sortable column2',
      sortable: true
    },
    {
      name: 'id2',
      label: 'Column1',
      sortable: false
    },
    {
      name: 'id3',
      label: 'Column2',
      sortable: false
    }
]

export const Default = () => ({
  title: 'Table',
  components: { Table },
  template: `<div class="p-6">
      <div class="pt-10 sm:w-full md:w-full">
          <Table
          hover
          clickable
          filter
          filter-by-column="id"
          :items="itemsDefault"
          :max-height="800"
          :sort-column="tableSort.activeColumn"
          :sort-direction="tableSort.activeDirection"
          class="inline-block min-w-full"
          >
          <!-- Header -->
          <template v-slot:header="slotProps">
              <th
              v-for="col in tableLayout"
              :key="col.name"
              class="t-table-header"
              >
              {{ col.label }}
              <button
                  v-if="col.sortable"
                  v-tooltip="{
                  placement: 'bottom',
                  content:
                      tableSort.activeDirection === 'asc'
                      ? 'Absteigend sortieren (Z-A)'
                      : 'Aufsteigend sortieren (A-Z)',
                  offset: '10'
                  }"
                  class="pl-1 align-middle focus:outline-none"
                  @click="sort(col.name)"
              >
                  <svg
                  v-show="tableSort.activeDirection === 'desc'"
                  :class="
                      tableSort.activeColumn === col.name
                      ? 'text-blue-200'
                      : 'text-gray-300'
                  "
                  class="w-4 h-4 fill-current hover:text-blue-300 focus:outline-none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <rect y="4" width="13" height="2.686" rx="1.343" />
                  <rect y="8" width="10" height="2.686" rx="1.343" />
                  <rect y="12" width="6" height="3" rx="1.5" />
                  <rect width="16" height="3" rx="1.5" />
                  </svg>
                  <svg
                  v-show="tableSort.activeDirection === 'asc'"
                  :class="
                      tableSort.activeColumn === col.name
                      ? 'text-blue-200'
                      : 'text-gray-300'
                  "
                  class="w-4 h-4 fill-current hover:text-blue-300 focus:outline-none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <rect
                      transform="matrix(1 0 0 -1 0 19.314)"
                      y="8.314"
                      width="13"
                      height="2.686"
                      rx="1.343"
                  />
                  <rect
                      transform="matrix(1 0 0 -1 0 11.314)"
                      y="4.314"
                      width="10"
                      height="2.686"
                      rx="1.343"
                  />
                  <rect
                      transform="matrix(1 0 0 -1 0 3)"
                      width="6"
                      height="3"
                      rx="1.5"
                  />
                  <rect
                      transform="matrix(1 0 0 -1 0 27)"
                      y="12"
                      width="16"
                      height="3"
                      rx="1.5"
                  />
                  </svg>
              </button>
              </th>
          </template>
          <!-- Rows -->
          <template v-slot:items="slotProps">
              <td class="t-table-td">
              <div class="block">
                  {{ slotProps.item.title }}
              </div>
              <div class="block text-sm font-normal text-gray-500"></div>
              </td>
              <td class="t-table-td">
              {{ slotProps.item.body }}
              </td>
              <td class="t-table-td">
              {{ slotProps.item.id }}
              </td>
              <td class="t-table-td">{{ slotProps.item.id }}</td>
          </template>
          </Table>
      </div>
      </div>`,
  data: () => ({ itemsDefault, tableSort, tableLayout }),
})


// storiesOf('Table', module)
//   .add('default', () => ({
//     title: 'Table',
//     components: { Table },
//     template: `<div class="p-6">
//     <div class="pt-10 sm:w-full md:w-full">
//         <Table
//         hover
//         clickable
//         filter
//         filter-by-column="id"
//         :items="itemsDefault"
//         :max-height="800"
//         :sort-column="tableSort.activeColumn"
//         :sort-direction="tableSort.activeDirection"
//         class="inline-block min-w-full"
//         >
//         <!-- Header -->
//         <template v-slot:header="slotProps">
//             <th
//             v-for="col in tableLayout"
//             :key="col.name"
//             class="t-table-header"
//             >
//             {{ col.label }}
//             <button
//                 v-if="col.sortable"
//                 v-tooltip="{
//                 placement: 'bottom',
//                 content:
//                     tableSort.activeDirection === 'asc'
//                     ? 'Absteigend sortieren (Z-A)'
//                     : 'Aufsteigend sortieren (A-Z)',
//                 offset: '10'
//                 }"
//                 class="pl-1 align-middle focus:outline-none"
//                 @click="sort(col.name)"
//             >
//                 <svg
//                 v-show="tableSort.activeDirection === 'desc'"
//                 :class="
//                     tableSort.activeColumn === col.name
//                     ? 'text-blue-200'
//                     : 'text-gray-300'
//                 "
//                 class="w-4 h-4 fill-current hover:text-blue-300 focus:outline-none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 >
//                 <rect y="4" width="13" height="2.686" rx="1.343" />
//                 <rect y="8" width="10" height="2.686" rx="1.343" />
//                 <rect y="12" width="6" height="3" rx="1.5" />
//                 <rect width="16" height="3" rx="1.5" />
//                 </svg>
//                 <svg
//                 v-show="tableSort.activeDirection === 'asc'"
//                 :class="
//                     tableSort.activeColumn === col.name
//                     ? 'text-blue-200'
//                     : 'text-gray-300'
//                 "
//                 class="w-4 h-4 fill-current hover:text-blue-300 focus:outline-none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 >
//                 <rect
//                     transform="matrix(1 0 0 -1 0 19.314)"
//                     y="8.314"
//                     width="13"
//                     height="2.686"
//                     rx="1.343"
//                 />
//                 <rect
//                     transform="matrix(1 0 0 -1 0 11.314)"
//                     y="4.314"
//                     width="10"
//                     height="2.686"
//                     rx="1.343"
//                 />
//                 <rect
//                     transform="matrix(1 0 0 -1 0 3)"
//                     width="6"
//                     height="3"
//                     rx="1.5"
//                 />
//                 <rect
//                     transform="matrix(1 0 0 -1 0 27)"
//                     y="12"
//                     width="16"
//                     height="3"
//                     rx="1.5"
//                 />
//                 </svg>
//             </button>
//             </th>
//         </template>
//         <!-- Rows -->
//         <template v-slot:items="slotProps">
//             <td class="t-table-td">
//             <div class="block">
//                 {{ slotProps.item.title }}
//             </div>
//             <div class="block text-sm font-normal text-gray-500"></div>
//             </td>
//             <td class="t-table-td">
//             {{ slotProps.item.body }}
//             </td>
//             <td class="t-table-td">
//             {{ slotProps.item.id }}
//             </td>
//             <td class="t-table-td">{{ slotProps.item.id }}</td>
//         </template>
//         </Table>
//     </div>
//     </div>`,
//     data: () => ({ itemsDefault, tableSort, tableLayout }),
//   }))