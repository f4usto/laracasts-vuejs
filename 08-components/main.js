new Vue({
    el: '#app',

    data: {
        tasks: [
            { name: 'Got to doctor', completed: true },
            { name: 'Got to store', completed: false },
        ],
        active: {}
    },

    methods: {
        toogle: function(task) {
            task.completed = !task.completed;
        }
    }

});
