<style lang="sass">

</style>

<template>
    <input v-model="message" @keyup.enter.prevent="storeMessage">
</template>


<script>
export default {
    props: ['type'],

    data() {
        return {
            message: ''
        };
    },

    methods: {
        storeMessage() {
            // $dispatch : to the parent on the chain
            // $broadcast: to all

            this.$dispatch('message.new', this.message);

            this.message = '';
        }
    }
}

</script>
