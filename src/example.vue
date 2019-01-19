<template>
  <div>
    <h2>Akasaka</h2>
    <div class="graffiti-example graffiti-example-akasaka">
      <graffiti-akasaka :scale1="[akasakaScale1[1],akasakaScale1[0]]" :duration1="akasakaDuration1" :delay1="akasakaDelay1" :texts="texts"></graffiti-akasaka>
    </div>
    <pre>scale1: [{{akasakaScale1[1]}}, {{akasakaScale1[0]}}]</pre>
    <vue-slider
      v-model="akasakaScale1"
      formatter="{value}"
      mergeFormatter="[{value2}, {value1}]"
      :min="1"
      :max="100"
      :enableCross="false"
    ></vue-slider>
    <pre>duration1: {{akasakaDuration1}}</pre>
    <vue-slider
      v-model="akasakaDuration1"      
      :min="1"
      :max="1000"      
    ></vue-slider>
    <pre>delay1: {{akasakaDelay1}}</pre>
    <vue-slider
      v-model="akasakaDelay1"      
      :min="1"
      :max="200"      
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
        akasakaScale1: [1, 8],
        akasakaDuration1: 450,
        akasakaDelay1: 70
      }
    }
  }
</script>