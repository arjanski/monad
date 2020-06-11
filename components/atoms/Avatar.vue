<template>
    <div class="row">
        <!-- Single Avatar -->
        <img v-if="items.length <= 0" :class="classNames" class="object-cover border-2 border-white rounded-full hover:border-gray-300 hover:shadow-md" :src="imagePath(item.imageUrl)">
        <!-- Multiple Avatars -->
        <div v-else v-for="(item, index) in items" :key="item.imageUrl" class="flex-shrink-0 inline-block cursor-pointer">
            <img v-if="index === 0" :class="classNames" class="relative object-cover transition duration-150 ease-in-out transform border-2 border-white rounded-full hover:border-gray-300 hover:shadow-md hover:z-50 hover:shadow-inner hover:-translate-y-1" :src="imagePath(item.imageUrl)" :alt="item.imageAlt">            
            <img v-else :class="classNames" :style="offset(index)" class="relative object-cover transition duration-150 ease-in-out transform border-2 border-white rounded-full hover:border-gray-300 hover:shadow-md hover:z-50 hover:shadow-inner hover:-translate-y-1" :src="imagePath(item.imageUrl)" :alt="item.imageAlt">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Avatar',
    props: {
        /**
        * Avatar items including image url, alt text and license. Items are organized as array of objects. Base url for images is /assets folder.
        */
        items: {
            type: Array,
            required: true
        },
        /**
         * Avatar size (small, medium, large)
         */
        size: {
            type: String,
            required: false,
            default: 'medium'
        },
        /**
        * Layout options: *default* (inline positioning with spacing) or *overlap* (overlapping circles)
        */
        layout: {
            type: String,
            required: false,
            default: 'default'
        }
    },
    computed: {
        /**
         * Sets size and color classes
         */
        classNames() {
        const { size } = this
        const classNames = [
        ]
        switch (size) {
            case 'small':
                classNames.push(
                'h-12 w-12' 
                )
                break;
            case 'medium':
                classNames.push(
                'h-16 w-16' 
                )
                break;
            case 'large':
                classNames.push(
                'h-24 w-24' 
                )
                break;
        }
        return classNames
        }
    },
    methods: {
        // Request image as a webpack module by using `require`
        imagePath(filename) {
            const { items } = this
            if (!filename) {
                return;
            }
            return require(`@/assets/${filename}`);
        },
        offset(index) {
            if (!index) return null
            let leftPos = 0
            let z = 10 - index

            switch (index) {
                case 0:
                    break;
                case 1:
                    leftPos = 20
                    break;
                case 2:
                    leftPos = 40
                    break;
                case 3:
                    leftPos = 70
                    break;
            }
            return {
                left: `-${leftPos}px`,
                "z-index": `${z}px`
            }       
        }
    }
}
</script>