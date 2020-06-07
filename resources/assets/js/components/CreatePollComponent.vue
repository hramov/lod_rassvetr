<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Создать опрос</h1>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form v-on:submit.prevent="storePoll">
                            <!-- <p>Заголовок</p> -->
                            <input class="form-control" type="text" v-model="title" placeholder="Заголовок" style="margin-bottom: 15px;">
                            <!-- <p>Описание</p> -->
                            <input class="form-control" type="text" v-model="description" placeholder="Описание" style="margin-bottom: 15px;">
                            <!-- <p>Контент</p> -->
                            <textarea class="form-control" v-model="content" placeholder="Основной контент" style="margin-bottom: 15px;"></textarea>
                            <button type="submit" class="btn btn-primary">Записать</button>
                        </form>
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
                title: "",
                description: "",
                content: ""
            }
        },
        methods: {
            storePoll() {
                axios.post('/api/createPoll', {
                    title: this.title,
                    description: this.description,
                    content: this.content
                }, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(response => console.log(response))
                .catch(e => console.log(e))
                this.$router.push({ name: 'mainContent' })
                console.log("Store")
            }
        }

        // mounted() {
        //     axios.get('', {
        //         headers: {
        //             Authorization: 'Bearer ' + localStorage.getItem('token')
        //         }
        //     })
        //     .then(response => {
        //         this.data = response
        //         console.log(response)
        //     }).catch(error => {
        //     })
        // }
    }
</script>
