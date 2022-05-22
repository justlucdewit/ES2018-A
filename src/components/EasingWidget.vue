<template>
    <div id="easing" :class="aboutOpened ? 'flipped' : ''">
        <div id="options">
            <div class="function" v-for="func in easingFunctions" :key="func.text" @click="toggleFunc(func)">
                <div class="select">
                    <input v-model="func.selected" :id="`checkbox-${func.text}`" type="checkbox">
                </div>
                
                <div class="text">
                    <div class="name">
                        {{ func.text | capitalize }}
                    </div>

                    <div class="description">
                        {{ func.description }}
                    </div>
                </div>
            </div>
        </div>
        <div id="graphing" style="text-align: center;padding-top: 40px;">
            <canvas height="300" width="300" id="graph-canvas" /><br />
            
            <div>
                0s
                <input type="range" min="0" max="3" step="0.1" />
                3s
            </div>
            
            <button>Play</button>
        </div>
    </div>
</template>

<script>
import easingFunctions from "@/assets/easing-functions-subset-1.json";
import { renderFormulas } from "../graph-renderer.js"

export default {
    props: {
        aboutOpened: {
            type: Boolean,
            required: true
        }
    },

    mounted() {
        // make all functions be selected by defaul
        this.easingFunctions = easingFunctions.easingFunctions;
        for (const key of Object.keys(this.easingFunctions)) {
            this.easingFunctions[key].selected = false
        }
    },

    data: () => ({
        easingFunctions: [
            {
                text: '😎',
                selected: true
            }
        ],
        update: 1
    }),
    
    filters: {
        capitalize: x => x[0].toUpperCase() + x.substr(1)
    },

    computed: {
        selectedFuncs() {
            this.update
            return Object.entries(this.easingFunctions).filter(x => x[1].selected).map(x => x[1])
        }
    },

    methods: {
        redrawSelectedFuncs() {
            renderFormulas(this.selectedFuncs.map(x => x.equation))
        },

        toggleFunc(func) {
            func.selected = !func.selected
            this.update += 1;

            // Goddamit vue2...
            this.$forceUpdate();

            // Redraw graphs
            this.redrawSelectedFuncs()
        }
    }
}
</script>

<style scoped lang="scss">
#easing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    padding: 40px;
    width: 90%;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }

    #graphing, #options {
        width: 100%;
        height: calc(100vh - 160px);
        background: #fafafa;
        
        @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
            height: calc(50vh - 160px);
        }
    }

    #options {
        overflow: auto;

        .function {
            display: grid;
            grid-template-columns: 50px auto;
            height: 80px;
            align-items: center;

            .name {
                font-weight: bold;
            }

            .description {
                color: gray;
            }

            &:nth-child(odd) {
                background: #e8e8e8;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>