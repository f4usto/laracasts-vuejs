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
                'alert': true,
                'success': type == 'success',
                'error': type == 'error',
            }
        }
    }
}

</script>
