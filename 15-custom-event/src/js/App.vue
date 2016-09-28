<template>
    <message @message.new="handleNewMessage"></message>

    <ul>
        <li v-for="message in messages">
            {{ message | uppercase }}
        </li>
    </ul>
</template>


<script >
    import Message  from './components/Message.vue';

    export default {
        components: {
            Message,
        },

        data() {
            return {
                messages: []
            }
        },

        // events: {
        //     'message.new'(message) {
        //         console.log('parent handling dispatcher event' + message);
        //     }
        // },

        methods: {
            handleNewMessage(message) {
                this.messages.push(message);
            }
        }
    };
</script>
