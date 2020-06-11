<template>
    <div :class="classNames" class="inline-flex items-center px-2 py-1 leading-tight rounded">
        <span class="text-sm font-medium">
            <slot />
        </span>
    </div>
</template>

<script>
export default {
    name: 'Badge',
    props: {
        /**
         * Size of badge. Can either be small, medium or large
         */
        size: {
            type: String,
            required: false,
            default: 'medium'
        },
        /**
         * Badge color. Takes a name from TailwindCSS color palette (e.g. blue, teal, indigo ...)
         */
        color: {
            type: String,
            required: false,
            default: 'teal'
        },
        // Layout options: *default* or *narrow* 
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
      const { size, color, layout } = this
      const classNames = [
          `bg-${color}-100`,
          `text-${color}-900`
      ]
      switch (size) {
        case 'small':
            if (layout === 'default') {
                classNames.push(
                'px-2 py-1 text-xs' 
                )
            }
            if (layout === 'narrow') {
                classNames.push(
                'px-2 text-xs uppercase' 
                )                
            }
            break;
        case 'medium':
            if (layout === 'default') {
                classNames.push(
                'px-3 py-1 text-sm' 
                )
            }
            if (layout === 'narrow') {
                classNames.push(
                'px-3 text-sm uppercase' 
                )                
            }
            break;
        case 'large':
            if (layout === 'default') {
                classNames.push(
                'px-4 py-2 text-md' 
                )
            }
            if (layout === 'narrow') {
                classNames.push(
                'px-4 py-1 text-md uppercase' 
                )                
            }
            break;
      }
      return classNames
    },
    }
}
</script>