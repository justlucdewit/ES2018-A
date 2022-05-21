<template>
  <div>
    <Header @toggleAbout="toggleOpen" />
    <AboutPopupOver :open="aboutOpened" />

    <div class="flip-card" >
      <div class="flip-card-inner" :class="aboutOpened ? 'flipped' : ''">
        <div class="flip-card-front">
          <EasingWidget :aboutOpened="aboutOpened" />
        </div>
        <div class="flip-card-back">
          <AboutPopupFlip />
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutPopupFlip from "@/components/AboutPopupFlip.vue";
import AboutPopupOver from "@/components/AboutPopupOver.vue";
import EasingWidget from "@/components/EasingWidget.vue";


export default {
  components: {
    Header,
    AboutPopupFlip,
    EasingWidget,
    AboutPopupOver
  },
  
  data: () => ({
    aboutOpened: false
  }),

  methods: {
    toggleOpen() {
      this.aboutOpened = !this.aboutOpened
    }
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  max-width: 100vw;
  overflow: hidden;
}

.flip-card {
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  &.flipped {
    @media screen and (max-width: 600px) {
      transform: rotateY(180deg);  
    }
  }
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100vw;
  height: 100vh;
  backface-visibility: hidden;
}

.flip-card-back {
  background-color: white;
  transform: rotateY(180deg);
} 
</style>
