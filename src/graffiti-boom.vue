<template>
  <div :id="id" class="graffiti-boom">
    <div v-html="text"></div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import anime from 'animejs'
  import TextUtils from './text-utils.js'

  export default {
    name: 'GraffitiBoom',
    props: {
      texts: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        index: -1,
        timeline: null,
        text: '',
        id: null
      }
    },
    mounted () {
      this.id = 'graffiti-' + this._uid
      this.changeText()
    },
    methods: {
      createTimeline () {
        let self = this
        const target = '#' + this.id + '.graffiti-boom div'

        this.timeline = anime.timeline()

        var ml4 = {}
        ml4.opacityIn = [0, 1]
        ml4.scaleIn = [0.2, 1]
        ml4.scaleOut = 3
        ml4.durationIn = 800
        ml4.durationOut = 600
        ml4.delay = 500

        this.timeline
          .add({
            targets: target,
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn
          })
          .add({
            targets: target,
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: 'easeInExpo',
            delay: ml4.delay,
            complete: function (anim) {
              self.changeText()
            }
          })
      },
      changeText () {
        let self = this
        let newIndex = this.index + 1
        if (newIndex >= this.texts.length || newIndex < 0) {
          newIndex = 0
        }

        this.index = newIndex
        this.text = this.texts[this.index]

        this.$nextTick(() => {
          anime.remove('#' + self.id)
          self.createTimeline()
        })
      }
    }
  }
</script>
<style lang="css">
  .graffiti-boom {
    position: relative;
  }

  .graffiti-boom > div {
    position: absolute;
    margin: auto;
    left: 0;
    top: -0.5em;
    right: 0;
    opacity: 0;
  }
</style>

