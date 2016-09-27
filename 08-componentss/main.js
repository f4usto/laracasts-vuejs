
Vue.component('tasks', {
    template: '#tasks-template',

    props: ['list'],

    methods: {
        toogle: function(task) {
            task.completed = !task.completed;
        }
    }
});

new Vue({
    el: '#app',

    data: {
        tasks: [
            { name: 'Got to doctor', completed: true },
            { name: 'Got to store', completed: false },
        ],
    },
});
