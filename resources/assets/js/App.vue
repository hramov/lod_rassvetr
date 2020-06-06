<template> 
		<v-app> 
            <MainLayout />
        </v-app>
</template>

<script> 
import MainLayout from './views/MainLayout.vue'


    export default {
        created() {

            if(localStorage.token) {
                axios.get('/api/user', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                },
                ).then(response => {
                    store.commit('loginUser')
                }).catch(error => {
                    if (error.response.status === 401 || error.response.status === 403) {
                        store.commit('logoutUser')
                        localStorage.setItem('token', '')
                        this.$router.push({name: 'login'})
                    }

                });
            }

        },
        components: {
            MainLayout
        }
    }
</script>