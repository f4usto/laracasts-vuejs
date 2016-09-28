var Vue = require('vue');

// Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('input[name="_token"]').value;

import App  from './App.vue';

Vue.directive('ajax', {
    params: ['complete'],

    bind() {
        this.el.addEventListener('submit', this.onSubmit.bind(this));
    },
    update() {
        console.log('updated');
    },
    unbind() {},

    onSubmitn(e) {
        var self = this;

        e.preventDefault();

        self.vm
            .$http[this.getRequestType()](this.el.action)
            .then(this.onComplete.bind(this))
            .catch(this.onError.bind(this));
    },

    onComplete() {
        if (this.params.complete) {
            console.log(this.params.complete);
        }
    },

    onError(response) {
       // Do whatever to inform the error
    },

    getRequestType() {
        var method = this.el.querySelector('input[name="_method"]');

        return (method ? method.value : this.el.method).toLowerCase();
    }
});

new Vue({
    el: '#app',

    http: {
        headers: {
            'X-CSRF-TOKEN': document.querySelector('input[name="_token"]').value;
        }
    }

    components: {
        App,
    }
});
