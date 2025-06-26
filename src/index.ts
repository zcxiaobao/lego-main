import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import './index.css';
import LText from './components/LText.vue';
import ColorPicker from './components/ColorPicker.vue';

createApp(App).mount('#root');

const app = createApp(App);
app.use(Antd).use(router).use(store);
app.component('l-text', LText);
app.component('color-picker', ColorPicker);
app.mount('#root');
