
Vue.component('alert', {
    template: '#alert-template',

    props: ['type', 'content'],

    data: function() {
        return {
            open: true,
        };
    },

    methods: {
        clear: function() {
            this.open = false;
        },
    },

    computed: {
        alertClasses: function () {
            var type = this.type;

            return {
                'alert': true,
                'success': type == 'success',
                'error': type == 'error',
            }
        }
    }
});

new Vue({
    el: '#app',
});
