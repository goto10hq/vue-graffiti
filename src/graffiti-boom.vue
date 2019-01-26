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
      },
      opacityIn: {
        type: Array,
        default () {
          return [0, 1]
        },
        validator (value) {
          return value != null && value.length == 2
        }
      },
      scaleIn: {
        type: Array,
        default () {
          return [0.2, 1]
        },
        validator (value) {
          return value != null && value.length == 2
        }
      },
      scaleOut: {
        type: Number,
        default () {
          return 3
        },
        validator (value) {
          return value >= 0
        }
      },
      durationIn: {
        type: Number,
        default() {
          return 800
        },
        validator (value) {
          return value >= 0
        }
      },
      durationOut: {
        type: Number,
        default() {
          return 600
        },
        validator (value) {
          return value >= 0
        }
      },
      delay: {
        type: Number,
        default() {
          return 500
        },
        validator (value) {
          return value >= 0
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
    computed: {
      target () {
        return '#' + this.id + '.graffiti-boom div'
      }
    },
    methods: {
      createTimeline () {
        let self = this        

        this.timeline = anime.timeline()        

        this.timeline
          .add({
            targets: self.target,
            opacity: this.opacityIn,
            scale: this.scaleIn,
            duration: this.durationIn
          })
          .add({
            targets: self.target,
            opacity: 0,
            scale: this.scaleOut,
            duration: this.durationOut,
            easing: 'easeInExpo',
            delay: this.delay,
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
          anime.remove(self.target)
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

