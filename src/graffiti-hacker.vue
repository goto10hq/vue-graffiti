<template>
  <div :id="id" class="graffiti-hacker">
    <span class="text-wrapper">
      <span class="line line1"></span>
      <span class="letters" v-html="text">Hello Goodbye</span>
    </span>
  </div>
</template>
<script>
  // http://tobiasahlin.com/moving-letters/#11
  import Vue from 'vue'
  import anime from 'animejs'
  import TextUtils from './text-utils.js'
  import $ from 'cash-dom'

  export default {
    name: 'GraffitiHacker',
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
    computed: {
      target () {
        return [
          '#' + this.id + '.graffiti-hacker > .text-wrapper > .line',
          '#' + this.id + '.graffiti-hacker .l',
          '#' + this.id + '.graffiti-hacker'
        ]
      }
    },
    methods: {
      createTimeline () {
        let self = this

        this.timeline = anime.timeline({ loop: true })

        this.timeline
          .add({
            targets: self.target[0],
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: 'easeOutExpo',
            duration: 700
          })
          .add({
            targets: self.target[0],
            translateX: [0, $('#' + self.id + ' .letters').width() + 5],
            easing: 'easeOutExpo',
            duration: 700,
            delay: 100
          })
          .add(
            {
              targets: self.target[1],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 600,
              delay: function (el, i) {
                return 6 * (i + 1)
              }
            },
            '-=700'
          )
          .add({
            targets: self.target[2],
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 1000,
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
        this.text = TextUtils.getSplitText(this.texts[this.index])

        this.$nextTick(() => {
          for (let x in self.target) {
            anime.remove(self.target[x])
          }
          $(self.target[2]).css('opacity', 1)
          $(self.target[0]).css('transform', 'scaleY(1) translateX(0px)')
          self.createTimeline()
        })
      }
    }
  }
</script>
<style lang="css">
  .graffiti-hacker > .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .graffiti-hacker > .text-wrapper > .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: #fff;
    transform-origin: 0 50%;
  }

  .graffiti-hacker > .text-wrapper > .line1 {
    top: 0;
    left: 0;
  }

  .graffiti-hacker > .text-wrapper > .letters > .l {
    white-space: pre-wrap;
    display: inline-block;
    line-height: 1em;
  }
</style>

