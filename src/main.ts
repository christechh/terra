import '@vuepic/vue-datepicker/dist/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import 'vue-tel-input/vue-tel-input.css'
import App from './App.vue'
import './assets/css/app.css'
import tooltipDirective from './directives/tooltip'
import i18n from './i18n'
import router from './router'

const app = createApp(App)
tooltipDirective(app)
app.use(router).use(createPinia()).use(i18n).mount('#app')
