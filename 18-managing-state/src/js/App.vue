<template>
    <button @click="misc.show = !misc.show">Toogle {{ shared.username }} </button>


    <notification class="animated" v-show="misc.show" transition="fadeAnimate">
        Hello World
    </notification>
</template>

<style land="sass">

</style>

<script >

    var store = {
        username: 'Fausto',
        show: true,
    };

    export default {
        data() {
            return {
                misc: {
                    show: true
                },
                shared: store
            };
        },

        components: {
            notification: {
                data() {
                    return {
                        shared: store
                    };
                },

                template: '<h2>{{ shared.username }}: <slot></slot></h2>'
            }
        }
    };
</script>
