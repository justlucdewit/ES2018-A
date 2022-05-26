<template>
  <div class="back-to-top" @click="toTop()">
      ⬆
  </div>
</template>

<script>
export default {
    methods: {
        toTop() {
            window.scrollTo( { top: 0 })
        }
    }
}
</script>

<style lang="scss">
.back-to-top {
    position: absolute;
    border: 1px solid rgb(44, 105, 163);
    color: rgb(44, 105, 163);
    border-radius: 100%;
    width: 30px;
    height: 30px;
    text-align: center;
    right: 10px;
    bottom: 10px;
    z-index: 1000;
    visibility: hidden;

    // Only visible when mobile
    @media screen and (max-width: 600px) {
        visibility: visible;
    }

    // Responde to hover
    &:hover {
        background: #eee;
        cursor: pointer;
        z-index: 10000000;
    }
}
</style>