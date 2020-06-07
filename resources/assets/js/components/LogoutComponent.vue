<template>
	<v-btn> fdsgsdfg</v-btn>
</template>

<script>
    import store from '../store'
    export default {
        mounted () {
            localStorage.removeItem('token')
            store.commit('logoutUser')
            this.$router.push({ name: 'mainContent' })
        }
    }
</script>
