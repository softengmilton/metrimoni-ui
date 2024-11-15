import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/styles/css/animate.min.css'
import './assets/styles/css/bootstrap.css'
import './assets/styles/css/style.css'
import router from './@core/routes/index'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as $ from 'jquery'; 
import 'slick-carousel'; 



const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount('#app');

