import Navbar from './Navbar.vue'

export default {
  title: 'Components|Navbar',
  component: Navbar,
  docgen: 'Test',
  parameters: {
    componentSubtitle: 'Responsive navbar header.',
  },
};

// Default

const logo = {
    imageUrl: 'images/logo.png',
    imageAlt: 'Logo',
}

const itemsDefault =   [
    {
        name: 'Button 1',
        path: '#'
    },
    {
        name: 'Button 2',
        path: '#'
    },
    {
    label: 'Dropdown 1',
    children: 
        [
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
    },
    {
        label: 'Dropdown 2',
        children: 
            [
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
        }
];

export const Default = () => ({
    title: 'Navbar',
    components: { Navbar },
    template: `<div>
        <Navbar :items="itemsDefault" :logo="logo" colorBg="gray-900" colorLabel="white" colorItem="gray-900" colorHoverText="white" colorHoverBg="gray-800" />
        <Navbar :items="itemsDefault" :logo="logo" colorBg="white" colorLabel="indigo-700" colorItem="gray-900" colorHoverText="indigo" colorHoverBg="indigo-100" />        
        <Navbar :items="itemsDefault" :logo="logo" colorBg="blue-900" colorLabel="white" colorItem="blue-900" colorHoverText="white" colorHoverBg="blue-800" />        
        </div>`,
    data: () => ({ itemsDefault, logo }),
  })