import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import EditorTemplate from '../views/EditorTemplate.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: EditorTemplate,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return Promise.resolve({ left: 0, top: 0 });
    }
  },
});

export default router;
