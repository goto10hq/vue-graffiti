<template>
  <div>
    <h2>sunshine</h2>
    <div class="graffiti-example graffiti-example-sunshine">
      <graffiti-sunshine
        :scale1="[sunshineScale1[1],sunshineScale1[0]]"
        :duration1="sunshineDuration1"
        :delay1="sunshineDelay1"
        :duration2="sunshineDuration2"
        :delay2="sunshineDelay2"
        :texts="texts"
      ></graffiti-sunshine>       
    </div>
    <pre>scale1: [{{sunshineScale1[1]}}, {{sunshineScale1[0]}}]</pre>
    <vue-slider
      v-model="sunshineScale1"
      formatter="{value}"
      mergeFormatter="[{value2}, {value1}]"
      :min="1"
      :max="100"
      :enableCross="false"
    ></vue-slider>
    <pre>duration1: {{sunshineDuration1}}</pre>
    <vue-slider
      v-model="sunshineDuration1"
      :min="1"
      :max="1000"
    ></vue-slider>
    <pre>delay1: {{sunshineDelay1}}</pre>
    <vue-slider
      v-model="sunshineDelay1"
      :min="1"
      :max="200"
    ></vue-slider>
    <pre>duration2: {{sunshineDuration2}}</pre>
    <vue-slider
      v-model="sunshineDuration2"
      :min="1"
      :max="2000"
    ></vue-slider>
    <pre>delay2: {{sunshineDelay2}}</pre>
    <vue-slider
      v-model="sunshineDelay2"
      :min="1"
      :max="2000"
    ></vue-slider>  
   <div>
    <h2>boom</h2>
    <div class="graffiti-example graffiti-example-boom">
      <graffiti-boom
        :texts="texts"
      ></graffiti-boom>
    </div>    
  </div> 
  </div> 
</template>

<script>
  import Vue from 'vue'
  import GraffitiSunshine from './graffiti-sunshine.vue'
  import GraffitiBoom from './graffiti-boom.vue'
  import VueSlider from 'vue-slider-component'

  export default {
    components: {
      GraffitiSunshine,
      GraffitiBoom,
      VueSlider
    },
    data () {
      return {
        texts: [
          'Two things are infinite:\nthe universe and human stupidity.',
          'I\'m not sure about the universe.\n- Albert Einstein'
        ],
        sunshineScale1: [1, 8],
        sunshineDuration1: 450,
        sunshineDelay1: 70,
        sunshineDuration2: 1000,
        sunshineDelay2: 1000
      }
    }
  }
</script>