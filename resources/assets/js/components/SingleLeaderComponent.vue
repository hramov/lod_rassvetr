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
                        <p>Подписчиков: {{ subs }}</p>
                        <div v-for="sub in subs_array">
                            <p> {{ sub.name }}</p>
                        </div>
                        <hr class="mt-2 mb-3"/>
                    <!-- </div> -->
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
                subs: "",
                subs_array: []
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
                console.log(response.data.subs_array[0][0].name)
            })
            axios.get('/api/getLeader/' + this.$route.params.id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                // console.log(response.data.user[0])
                this.name = response.data.user[0].name
                this.email = response.data.user[0].email
                this.subs = response.data.user[0].subs
            }).catch(error => {
                console.log(error)
            })
        }
    }
</script>
