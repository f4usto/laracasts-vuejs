<template>
    <button @click="show = !show">Toogle</button>

    <div class="target" v-show="show" transition="fade">
        Hello World
    </div>

    <div class="target animated" v-show="show" transition="fadeAnimate">
        Hello World
    </div>


</template>

<style land="sass">
    .target {
        background-color: grey;
    }

    .fade-transition {
        transition: all .5s ease;
    }

    .fade-enter {
        opacity: 0;
    }

    .fade-leave {
        opacity: 0;
    }
</style>

<script >
    export default {
        data() {
            return {
                show: true
            };
        }
    };
</script>
