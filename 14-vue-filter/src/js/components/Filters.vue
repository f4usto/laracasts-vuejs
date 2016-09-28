<style lang="sass">

</style>

<template id="alert-template">
    <pre>
        {{ $data | json }}
        {{ message | uppercase }}
        {{ 5 | currency 'R$' }}
        {{ object| jsonIt }}
    </pre>
</template>

<script>
export default {
    props: ['type'],

    data() {
        return {
            open: true,
            message: 'Nenhuma mensagem foi inserida!',
            object: {
                ok: 'mensagem de ok'
            },
        };
    }
}

</script>
