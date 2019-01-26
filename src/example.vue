<template>
  <div>
    <h2>sunshine</h2>
    <div class="graffiti-example graffiti-example-sunshine">
      <graffiti-sunshine
        :scale="[sunshineScale[1],sunshineScale[0]]"
        :duration1="sunshineDuration1"
        :delay1="sunshineDelay1"
        :duration2="sunshineDuration2"
        :delay2="sunshineDelay2"
        :texts="texts"
      ></graffiti-sunshine>
    </div>
    <pre>scale: [{{sunshineScale[1]}}, {{sunshineScale[0]}}]</pre>
    <vue-slider
      v-model="sunshineScale"
      formatter="{value}"
      mergeFormatter="[{value2}, {value1}]"
      :min="1"
      :max="100"
      :enableCross="false"
    ></vue-slider>
    <pre>duration1: {{sunshineDuration1}}</pre>
    <vue-slider v-model="sunshineDuration1" :min="1" :max="1000"></vue-slider>
    <pre>delay1: {{sunshineDelay1}}</pre>
    <vue-slider v-model="sunshineDelay1" :min="1" :max="200"></vue-slider>
    <pre>duration2: {{sunshineDuration2}}</pre>
    <vue-slider v-model="sunshineDuration2" :min="1" :max="2000"></vue-slider>
    <pre>delay2: {{sunshineDelay2}}</pre>
    <vue-slider v-model="sunshineDelay2" :min="1" :max="2000"></vue-slider>
    <div>
      <h2>boom</h2>
      <div class="graffiti-example graffiti-example-boom">
        <graffiti-boom
          :texts="texts"
          :opacity-in="boomOpacityIn"
          :scale-in="boomScaleIn"
          :scale-out="boomScaleOut"
          :duration-in="boomDurationIn"
          :duration-out="boomDurationOut"
          :delay="boomDelay"
        ></graffiti-boom>
      </div>
    </div>
    <pre>opacityIn: [{{boomOpacityIn[0]}}, {{boomOpacityIn[1]}}]</pre>
    <vue-slider
      v-model="boomOpacityIn"
      formatter="{value}"
      mergeFormatter="[{value1}, {value2}]"
      :min="0"
      :max="1"
      :enableCross="false"
      :interval="0.1"
    ></vue-slider>
    <pre>scaleIn: [{{boomScaleIn[0]}}, {{boomScaleIn[1]}}]</pre>
    <vue-slider
      v-model="boomScaleIn"
      formatter="{value}"
      mergeFormatter="[{value1}, {value2}]"
      :min="0"
      :max="1"
      :enableCross="false"
      :interval="0.1"
    ></vue-slider>
    <pre>scaleOut: {{boomScaleOut}}</pre>
    <vue-slider v-model="boomScaleOut" :min="0" :max="30"></vue-slider>
    <pre>durationIn: {{boomDurationIn}}</pre>
    <vue-slider v-model="boomDurationIn" :min="0" :max="1000"></vue-slider>
    <pre>durationOut: {{boomDurationOut}}</pre>
    <vue-slider v-model="boomDurationOut" :min="0" :max="1000"></vue-slider>
    <pre>delay: {{boomDelay}}</pre>
    <vue-slider v-model="boomDelay" :min="0" :max="1000"></vue-slider>
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
        sunshineScale: [1, 8],
        sunshineDuration1: 450,
        sunshineDelay1: 70,
        sunshineDuration2: 1000,
        sunshineDelay2: 1000,
        boomOpacityIn: [0, 1],
        boomScaleIn: [0.2, 1],
        boomScaleOut: 3,
        boomDurationIn: 800,
        boomDurationOut: 600,
        boomDelay: 500
      }
    }
  }
</script>