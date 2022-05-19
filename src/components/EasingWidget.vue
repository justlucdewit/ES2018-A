<template>
    <div id="easing">
        <div id="options">
            <div class="function" v-for="func in easingFunctions" :key="func.text">
                <div class="select">
                    <input :id="`checkbox-${func.text}`" type="checkbox">
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
            Graph goes here :p
        </div>
    </div>
</template>

<script>
import easingFunctions from "@/assets/easing-functions-subset-1.json";

export default {
    data: () => ({
        easingFunctions: easingFunctions.easingFunctions
    }),
    
    filters: {
        capitalize: x => x[0].toUpperCase() + x.substr(1)
    }
}
</script>

<style scoped lang="scss">
#easing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    padding: 40px;

    #graphing, #options {
        width: 100%;
        height: calc(100vh - 160px);
        background: #fafafa
    }

    #options {
        overflow: auto;


        .function {
            display: grid;
            grid-template-columns: 50px auto;
            margin: 20px 10px;

            .name {
                font-weight: bold;
            }

            .description {
                color: gray;
            }
        }
    }
}
</style>