<template>
    <component :is="currentPage"></component>

    <a href="#" @click="currentPage = 'home-page'">Home</a>
    <a href="#" @click="currentPage = 'about-page'">About</a>

</template>

<style land="sass">

</style>

<script >
    import HomePage from './components/HomePage.vue';
    import AboutPage from './components/AboutPage.vue';

    export default {
        data() {
            return {
                currentPage: "home-page"
            };
        },

        components: {
            HomePage,
            AboutPage
        }
    };
</script>
