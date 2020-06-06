<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <a class="btn btn-primary" @click="$router.go(-1)">Back</a>
                <a class="btn btn-primary" @click="reload">Обновить</a>

                <h1>Leaders</h1>
                <div class="panel panel-default">
                    <!-- <div class="panel-heading">Leaders</div> -->
                    <div v-for="leader in leaders" class="panel-body">
                        <p>Название: {{ leader.name }}</p>
                        <p>Контент: {{ leader.email }}</p>
                        <p>Подписчиков: {{ leader.subs }}</p>
                        <a :href="'/#/leader/' + leader.id" class="button success">В профиль</a> 
                        
                        <div v-if="status == 'ordinary'">
                            <button v-bind:id="leader.id" @click="subs(leader.id)" class="btn btn-primary">Подписаться</button> 
                        </div>
                        <hr class="mt-2 mb-3"/>
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
                id: "",
                data: "",
                leaders: [],
                status: ""
            }
        },
        mounted() {
            axios.get('/api/getLeaders/', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                this.leaders = response.data.data
                this.status = response.data.status;
                // console.log(response.data.status)
            }).catch(error => {
            })
        },
        methods: {
            subs(id) {
                axios.get('/api/subscribe/' + id, {
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
                })
                .then(response => {
                    this.leaders = response.data.data
                    this.status = response.data.status
                    this.$router.push({ name: 'leader', params: {id: id} })
                    // console.log(response)
                    axios.get('/api/getLeaders', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                    })
                    .then(response => {
                        // console.log(response);
                        this.leaders = response.data.data;
                        this.status = response.data.status;
                    });
                })
                .catch(err => console.log(err))
                document.getElementById(id).disabled = true
                // console.log(response.data.data)
                },
            reload() {
                axios.get('/api/reload', {
                   headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                } 
                })
            }
            }
        }
</script>
