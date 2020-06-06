<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <a class="btn btn-primary" @click="$router.go(-1)">Back</a>

                <h1>Leader {{ name }}</h1>
                <hr class="mt-2 mb-3"/>
                <div class="panel panel-default">
                    <!-- <div class="panel-heading">Leaders</div> -->
<!--                     <div v-for="leader in leaders" class="panel-body"> -->
                        <p>Название: {{ name }}</p>
                        <p>Контент: {{ email }}</p>
                        <p>Подписчиков: {{ weight }}</p>
                        <p>Вес: {{ weight }}</p>
                        <h3>Подписчики</h3>
                        <div v-for="sub in subs_array">
                            <p><a :href="'/#/leader/' + sub.id">{{ sub.name }}</a></p>
                        </div>
                        <hr class="mt-2 mb-3"/>
                        <div v-if="status == 'subscriber'">
                            <a class="btn btn-primary" @click="unsubscribe">Отписаться</a>
                        </div>
                        <div v-else>
                            <a class="btn btn-primary" @click="subscribe">Подписаться</a>
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
                name: "",
                email: "",
                weight: "",
                subs_array: [],
                status: ""
            }
        },
        mounted() {
            axios.get('/api/getSubs/' + this.$route.params.id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                this.subs_array = response.data.subs_array[0];
                this.status = response.data.status;
                console.log(response.data.status)
            })
            axios.get('/api/getLeader/' + this.$route.params.id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                console.log(response.data.user[0])
                this.name = response.data.user[0].name
                this.email = response.data.user[0].email
                this.weight = response.data.user[0].weight
                if (this.weight == null) {
                    this.weight = 0;
                }
            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            unsubscribe() {
                axios.get('/api/unsubscribe/' + this.$route.params.id, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    } 
                })
                .then(response => {
                    console.log(response)
                })
            },
            subscribe() {
                axios.get('/api/subscribe/' + this.$route.params.id, {
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
                })
                .then(response => {
                    this.leaders = response.data.data
                    this.status = response.data.status
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
                // document.getElementById(id).disabled = true
            }
    }
}
</script>
