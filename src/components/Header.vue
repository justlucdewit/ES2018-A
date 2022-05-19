<template>
  <div id="header">
      <span id="title">CSS Ease</span>
      <span id="nav">
          <span class="nav-item" @click="$emit('toggleAbout')">
              <span id="abt-desktop">About</span>
              <span id="abt-mobile">i</span>
          </span>
      </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
#header {
    background: #eee;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(44, 105, 163);

    // Title in header
    #title {
        font-weight: bold;
        font-size: x-large;
    }

    // Navigation bar in header
    #nav {
        padding: 10px;
        color: lighten(rgb(44, 105, 163), 20%);
        border: 1px solid lighten(rgb(44, 105, 163), 40%);
        
        #abt-desktop {
            display: inline;

            @media only screen and (max-width: 600px) {
                display: none;
            }
        }

        #abt-mobile {
            display: none;

            @media only screen and (max-width: 600px) {
                display: inline;
            }
        }

        @media only screen and (max-width: 600px) {
            border-radius: 100%;
            width: 15px;
            height: 15px;
            text-align: center;
            line-height: 14px;
        }

        // Indicate that the user is hovering
        // over the nav item
        &:hover {
            cursor: pointer;
            border: 1px solid rgb(44, 105, 163);
            color: rgb(44, 105, 163);
        }
    }
}
</style>