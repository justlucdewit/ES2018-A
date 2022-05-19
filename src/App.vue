<template>
  <div id="app">
    <Header @toggleAbout="toggleOpen" />
    <AboutPopup @toggleAbout="toggleOpen" :open="aboutOpened" />
    <EasingWidget />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutPopup from "@/components/AboutPopup.vue";
import EasingWidget from "@/components/EasingWidget.vue";

export default {
  components: {
    Header,
    AboutPopup,
    EasingWidget
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

#app {
  
}
</style>
