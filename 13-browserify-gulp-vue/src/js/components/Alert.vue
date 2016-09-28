<template id="alert-template">
    <div :class="alertClasses" v-if="open">
        <slot>
           Nenhuma mensagem foi inserida!
        </slot>
        <button @click="clear">
            x
        </button>
    </div>
</template>

<style lang="sass">
    .Alert {
        border: 1px solid grey;
        background-color: lighten(grey, 70%);
        text-align: center;
        margin: 0 auto;
    }

    .Alert__success {
        border-color: green;
        background-color: lighten(green, 70%);
        color: lighten(green, 20%);
    }

    .Alert__error {
        border-color: red;
        background-color: lighten(red, 70%);
        color: lighten(red, 20%);
    }
</style>

<script>
export default {
    props: ['type'],

    data() {
        return {
            open: true,
        };
    },

    methods: {
        clear() {
            this.open = false;
        },
    },

    computed: {
        alertClasses() {
            var type = this.type;

            return {
                'Alert': true,
                'Alert__success': type == 'success',
                'Alert__error': type == 'error',
            }
        }
    }
}

</script>
