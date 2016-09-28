<style lang="sass">

</style>

<template>

    <ul>
        <!-- <li v-for="person in list | orderBy 'name' -1 | limitBy 2"> -->
        <li v-for="person in list | role 'user'">
            {{ person.name }}
        </li>
    </ul>
</template>


<script>
export default {
    props: ['type'],

    data() {
        return {
            list: [
                { name: 'Joe', role: 'admin' },
                { name: 'Frank', role: 'admin' },
                { name: 'Suzie', role: 'user' },
            ]
        };
    }
}

</script>
