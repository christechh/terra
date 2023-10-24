import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/css/app.css'
import i18n from './i18n'

createApp(App).use(router).use(createPinia()).use(i18n).mount('#app')
