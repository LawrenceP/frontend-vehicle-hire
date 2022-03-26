import Vue from 'vue'
import Router from 'vue-router'
import Vehicles from '@/components/Vehicles'
import Vehicle from '@/components/Vehicle'
import Todos from '@/components/Todos'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vehicles',
      component: Vehicles
    },
    {
      path: '/vehicle/:id',
      name: 'Vehicle',
      component: Vehicle
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    }
  ]
})
