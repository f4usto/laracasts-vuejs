<template>
    <form action='posts/1'
        v-ajax complete="Okay, i worked"
    >
        <button type="submit">
            List
        </button>
    </form>
</template>


<script >
    export default {
    };
</script>
