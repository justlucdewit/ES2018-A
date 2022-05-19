<template>
    <div id="about" :class="open ? 'open' : ''">
        <span id="close" @click="$emit('toggleAbout')">X</span>
        <div id="content">
            Welcome to CSS Ease, an online playground for frontend developers
            to learn about ease functions
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

<style scoped lang="scss">
#about {
    position: absolute;
    top: 0;
    right: -50vw;
    width: calc(50vw - 20px);
    height: calc(100vh - 20px);
    filter: drop-shadow(2px 4px 6px black);
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(10.1px);
    border: 1px solid rgba(255, 255, 255, 0.69);
    padding: 10px;

    // Make it nice and animated
    transition: all 0.2s ease-in-out;

    // This applies when the popup is opened
    &.open {
        right: 0;
        transform: scale(1);
    }

    #close {
        color: #444;
        display: inline-block;
        margin-bottom: 10px;

        &:hover {
            color: #000;
            cursor: pointer;
        }
    }
    
    // This is for mobile mode
    @media only screen and (max-width: 600px) {
        left: 40px;
        top: 40px;
        width: calc(100vw - 100px);
        height: calc(100vh - 100px);
        transform: scale(0);
    }
}
</style>