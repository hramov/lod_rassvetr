<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <a class="btn btn-primary" @click="$router.go(-1)">Back</a>
                <a class="btn btn-primary" @click="reload">Обновить</a>

                <h1>Leader {{ name }}</h1>
                <hr class="mt-2 mb-3"/>
                <div class="panel panel-default">
                    <!-- <div class="panel-heading">Leaders</div> -->
                    <div v-for="leader in leaders" class="panel-body">
                        <p>Название: {{ name }}</p>
                        <p>Контент: {{ email }}</p>
                        <p>Подписчиков: {{ subs }}</p>
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
            axios.get('/api/getLeader/', {
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
        }
    }
</script>
