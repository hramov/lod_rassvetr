<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Create Poll</h1>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form v-on:submit.prevent="storePoll">
                            <p>Заголовок</p>
                            <input class="form-control" type="text" v-model="title">
                            <p>Описание</p>
                            <input class="form-control" type="text" v-model="description">
                            <p>Контент</p>
                            <textarea class="form-control" v-model="content"></textarea>
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
