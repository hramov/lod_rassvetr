<template> 
		<v-app> 
            <MainLayout />
        </v-app>
</template>

<script> 
import MainLayout from './views/MainLayout.vue'
import store from './store.js'

    export default {
        created() {

            if(localStorage.token) {
                axios.get('/user', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(response => {
                    console.log(response)
                    store.commit('loginUser')
                }).catch(error => {
                    // if (error.response.status === 401 || error.response.status === 403) {
                        store.commit('logoutUser')
                        localStorage.setItem('token', '')
                        this.$router.push({name: 'mainContent'})
                    // }

                });
            }

        },
        components: {
            MainLayout
        }
    }
</script>