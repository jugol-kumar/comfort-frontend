import "./assets/fonts/feather/feather.css"
import "./assets/libs/bootstrap-icons/font/bootstrap-icons.min.css"
import "./assets/libs/simplebar/dist/simplebar.min.css"
import "./assets/css/theme.min.css"
import './assets/css/main.css'


import "./assets/js/vendors/darkMode.js"
import "./assets/libs/@popperjs/core/dist/umd/popper.min.js"
import "./assets/libs/bootstrap/dist/js/bootstrap.min.js"
import "./assets/libs/simplebar/dist/simplebar.min.js"
import "./assets/js/theme.min.js"
import "./assets/js/vendors/validation.js"


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios"
const app = createApp(App)
app.config.globalProperties.$API_URL = "http://localhost:8000" // 'https://ctpbd.com'



axios.defaults.baseURL = "http://localhost:8000" // 'https://ctpbd.com'
axios.defaults.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

app.use(createPinia())
app.use(router, axios)


app.mount('#app')
