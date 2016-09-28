var Vue = require('vue');

import Filters  from './components/Filters.vue';
import List  from './components/List.vue';

Vue.filter('jsonIt', function(value) {
    return JSON.stringify(value);
});

Vue.filter('role', function(value, role) {
    return value.filter(function (item) {
        return item.role == role;
    });
});

new Vue({
    el: '#app',

    components: {
        Filters,
        List
    },

    ready() {
        console.log('Vue app ready');
    }
});
