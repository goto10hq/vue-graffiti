require('../docs/example.css')

import Example from './example.vue'
import Vue from 'vue'

Vue.config.debug = true

new Vue({
  el: '#example',
  render: h => h(Example)
})
