import { App } from 'vue'

const tooltipDirective = (app: App) => {
  app.directive('tooltip', {
    mounted(el, binding) {
      init(el, binding)
    },
    updated(el, binding) {
      init(el, binding)
    }
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function init(el: HTMLElement, binding: any) {
  const position = binding.arg || 'top'
  const tooltipText = binding.value || 'Tooltip text'
  el.setAttribute('position', position)
  el.setAttribute('tooltip', tooltipText)
}

export default tooltipDirective
