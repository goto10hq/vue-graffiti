<template>
  <div
    v-html="text"
    :id="id"
    class="graffiti-sunshine"
  ></div>
</template>
<script>
  import Vue from 'vue'
  import anime from 'animejs'
  import TextUtils from './text-utils.js'

  export default {
    name: 'GraffitiSunshine',
    props: {
      texts: {
        type: Array,
        default () {
          return []
        }
      },
      scale1: {
        type: Array,
        default () {
          return [8, 1]
        },
        validator (value) {
          return value != null && value.length == 2
        }
      },
      duration1: {
        type: Number,
        default () {
          return 450
        },
        validator (value) {
          return value > 0
        }
      },
      delay1: {
        type: Number,
        default () {
          return 70
        },
        validator (value) {
          return value > 0
        }
      },
      duration2: {
        type: Number,
        default () {
          return 1000
        },
        validator (value) {
          return value > 0
        }
      },
      delay2: {
        type: Number,
        default () {
          return 1000
        },
        validator (value) {
          return value > 0
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
        const target = '#' + this.id + '.graffiti-sunshine span'

        this.timeline = anime.timeline()

        this.timeline
          .add({
            targets: target,
            scale: this.scale1,
            opacity: [0, 1],
            translateZ: 0,
            easing: 'easeOutExpo',
            duration: this.duration1,
            delay: function (el, i) {
              return self.delay1 * i
            }
          })
          .add({
            targets: target,
            opacity: 0,
            duration: this.duration2,
            easing: 'easeOutExpo',
            delay: this.delay2,
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
        this.text = TextUtils.getSplittedText(this.texts[this.index])

        this.$nextTick(() => {
          anime.remove('.letter')
          self.createTimeline()
        })
      }
    }
  }
</script>
<style lang="css">
  .graffiti-sunshine > span {
    white-space: pre-wrap;
    display: inline-block;
  }
</style>

