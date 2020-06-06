<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Dashboard</h1>
                <p>
                    <router-link :to="{ name: 'logout' }">Logout</router-link>
                </p>
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>
                    <div class="panel-body">
                        <p>Data: {{ data.name }} {{ data.email}}</p>
                        <p>Status: {{ data.status }} </p>
                        <router-link :to="{ name: 'polls' }">Polls</router-link>
                        <router-link :to="{ name: 'leaders' }">Leaders</router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: ""
            }
        },
        mounted() {
            axios.get('/api/dashboard/', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                this.data = response.data.data[0]
                console.log(response.data.data[0])
            }).catch(error => {
            })
        }
    }
</script>
