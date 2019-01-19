<template>
  <div>
    <h2>Akasaka</h2>
    <div class="graffiti-example graffiti-example-akasaka">
      <graffiti-akasaka :scale1="[akasakaScale1[1],akasakaScale1[0]]" :texts="texts"></graffiti-akasaka>
    </div>
    <pre>scale1: [{{akasakaScale1[1]}}, {{akasakaScale1[0]}}]</pre>
    <vue-slider
      v-model="akasakaScale1"
      formatter="{value}"
      mergeFormatter="scale1: [{value2}, {value1}]"
      :min="1"
      :max="100"
      :enableCross="false"
    ></vue-slider>
  </div>
</template>

<script>
  import Vue from 'vue'
  import GraffitiAkasaka from './graffiti-akasaka.vue'
  import VueSlider from 'vue-slider-component'

  export default {
    components: {
      GraffitiAkasaka,
      VueSlider
    },
    data () {
      return {
        texts: [
          'Two things are infinite:\nthe universe and human stupidity',
          'I\'m not sure about the universe.\n- Albert Einstein'          
        ],
        akasakaScale1: [1, 8]
      }
    }
  }
</script>