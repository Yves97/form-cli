import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('upper',(value)=>{
  return value.toString().toUpperCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
