var Vue = require('vue');

// Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('input[name="_token"]').value;

import App  from './App.vue';

Vue.transition('fadeAnimate', {
    enterClass: 'flipInX',
    leaveClass: 'fadeOutLeft'
});

new Vue({
    el: '#app',

    components: {
        App,
    }
});
