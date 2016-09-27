
Vue.component('tasks', {
    template: '#tasks-template',

    props: ['list'],

    data: function() {
        return {
            list: []
        };
    },

    methods: {
        toogle: function(task) {
            task.completed = !task.completed;
        },

        remove: function(task) {
            this.list.$remove(task);
        },

        isCompleted(task) {
            return task.completed;
        },

        inProgress(task) {
            return !task.completed;
        },

        clearCompleted() {
            this.list = this.list.filter(this.inProgress);
        }
    },

    computed: {
        remaining: function() {
            var self = this;

            return this.list.filter(self.inProgress).length;
        }
    },
});

new Vue({
    el: '#app',

    data: {
        tasks: [],
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
    },

    created: function() {
        var self = this;

        $.ajax({
            url: 'http://localhost:5984/lc_vuejs_tasks/_all_docs?limit=10&descending=true&include_docs=true',
            type: 'get',
            dataType: 'jsonp',
            success: function(data) {
                self.tasks = data.rows.map(function (row) {
                    return row.doc;
                });
            }
        });
    }
});
