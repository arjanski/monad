<template>
  <button :type="type" :class="classNames" @click.stop="$emit('click')" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
/**
Choose between three layouts (`outline`, `transparent`, `filled`) and three sizes (`small`, `medium`, `large`). 
Additional parameters include a `disabled` state, `shadow` and `icon`display.
**/

export default {
  props: {
    /**
    Base color used for text, borders and (hover) background (TailwindCSS color class or custom CSS class)
    */
    color: {
      type: String,
      default: 'blue'
    },
    /**
    Choose between three sizes (`xs`, `sm`, `medium`)
    */
    size: {
      type: String,
      default: 'medium'
    },
    /**
    Triggers disabled mode (no click event, opacity)
    */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
    Sets HTML5 <button> attribute, either: `button`, `submit` or `reset`
    */
    type: {
      type: String,
      default: 'button'
    },
    /**
    Choose between three layouts: `transparent`, `light` or `filled`
    */
    layout: {
      type: String,
      default: 'transparent'
    },
    /**
    Triggers a box-shadow
    */
    shadow: {
      type: Boolean,
      required: false,
      default: false
    },
    /**
    Triggers icon on right-hand side of button label. Accepts icon name as string.
    */
    icon: {
      type: String,
      required: false
    },
    /**
    Tooltip text to be displayed when hovering the button. Passed data can be either a string with/without HTML.
    */
    tooltip: {
      type: String,
      required: false
    },
    /**
    Additional CSS classes to be passed into component
    */
    classes: {
      type: String
    }
  },
  computed: {
    classNames () {
      const { disabled, color, classes, layout, icon, shadow, size } = this
      const classNames = [
        {
          'cursor-not-allowed opacity-50': disabled,
          'focus:shadow-outline': !disabled
        },
        {
          'rounded': !icon,
          'rounded-full inline-flex items-center': icon
        },
        `focus:outline-none leading-none`,
        `transition duration-75 ease-in-out`,
        classes
      ]
      //let colorname = color.match(/\b(\w|')+\b/gim)  
      //colorname = colorname[0]
      let textColor = `text-${color}-700`
      let textColorHover = `hover:bg-${color}-100`
      if (color === 'white') { 
        textColor = 'text-white'
        textColorHover = 'hover:bg-gray-800' 
      }

      switch (size) {
        case 'small':
          classNames.push(
            `text-sm`,
            `py-1`,
            {
              'px-3': !icon,
              'px-1': icon
            }
          )
          break
        case 'medium':
          classNames.push(
            `text-base`,
            `py-2`,
            {
              'px-4': !icon,
              'px-2': icon
            }
          )
          break
        case 'large':
        default:
          classNames.push(
            `text-lg`,
            `py-3`,
            {
              'px-4': !icon,
              'text-lg px-2': icon
            }
          )
      }
      switch (layout) {
        case 'filled':
          classNames.push(
            {
              [`hover:bg-${color}-400`]: !disabled
            },
            `bg-${color}-700`,
            'text-white',
            'font-medium')
          break
        case 'transparent':
          classNames.push(
            textColor,
            textColorHover,
            'bg-transparent',
            `hover:border-${color}-500`
          )
          break
        case 'outline':
          textColor = `text-${color}`
          classNames.push(
            textColor,
            `bg-${color}-100`,
            `hover:bg-${color}-200`,
            `hover:border-${color}-500`,
            `border border-${color}-200`
          )
          break
        default:
          break
      }
      if (shadow) classNames.push('shadow')
      return classNames
    }
  }
}
</script>