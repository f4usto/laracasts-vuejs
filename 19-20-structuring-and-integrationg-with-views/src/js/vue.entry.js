import Vue from 'vue';

// Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('input[name="_token"]').value;

import App from './App.vue';

new Vue({
    el: '#app',

    components: {
        App,
    }
});
