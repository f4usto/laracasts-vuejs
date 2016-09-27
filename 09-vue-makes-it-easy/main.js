
Vue.component('tasks', {
    template: '#tasks-template',

    props: ['list', 'remaining'],

    methods: {
        toogle: function(task) {
            task.completed = !task.completed;
        },

        remove: function(task) {
            this.list.$remove(task);
        },

        isCompleted: function (task) {
            return task.completed;
        },

        inProgress: function (task) {
            return !task.completed;
        },

        clearCompleted: function() {
            this.list = this.list.filter(this.inProgress);
        }
    },

    computed: {
        remaining: function() {
            var self = this;

            return this.list.filter(self.inProgress).length;
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
        newTask: ''
    },

    methods: {
        insertTask: function () {
            this.tasks.push({
                name: this.newTask,
                completed: false
            });
            this.newTask = '';
        }
    }
});
