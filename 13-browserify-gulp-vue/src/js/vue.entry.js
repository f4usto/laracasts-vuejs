var Vue = require('vue');

var Alert = require('./components/Alert.vue');

new Vue({
    el: '#app',

    components: {
        Alert
    },

    ready() {
        alert('Vue app ready');
    }
});
