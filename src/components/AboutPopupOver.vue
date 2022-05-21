<template>
    <div v-if="open">
        <div id="arrow"></div>
        <div id="wrapper">
            Welcome to CSS Ease, an online playground for web developers to
            use as a reference for easing functions
        </div>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss">
#wrapper {
    position: absolute;
    z-index: 1;
    top: 80px;
    right: 10px;
    width: 200px;
    padding: 10px;
    background: #eee;
    border: 1px solid rgb(44, 105, 163);
    display: block;

    // Hide on mobile
    @media screen and (max-width: 600px) {
        display: none;
    }
}

$arrow-size: 25px;

#arrow {
    position: absolute;
    z-index: 3;
    top: 55px;
    right: 25px;

    // Arrow shape using broders
    border-bottom: $arrow-size solid rgb(44, 105, 163);
    border-right: $arrow-size solid transparent;
    border-left: $arrow-size solid transparent;
    
    // Hide on mobile
    display: block;
    @media screen and (max-width: 600px) {
        display: none;
    }
}
</style>