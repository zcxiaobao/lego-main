import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import './index.css';
import LText from './components/LText.vue';

createApp(App).mount('#root');

const app = createApp(App);
app.use(router).use(store);
app.component('l-text', LText);

app.mount('#root');
