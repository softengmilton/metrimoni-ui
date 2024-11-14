import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/styles/css/bootstrap.css'
import './assets/styles/css/style.css'
import router from './@core/routes/index.js'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';



const app = createApp(App);

app.use(ElementPlus);
app.use(router)
app.mount('#app')

