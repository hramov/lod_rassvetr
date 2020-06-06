<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Create Poll</h1>
                <div class="panel panel-default">
                    <div class="panel-body">
                        <form v-on:submit.prevent="storePoll">
                            <input type="hidden" name="_token" :value="csrf">
                            <p>Заголовок</p>
                            <input class="form-control" type="text" v-model="title">
                            <p>Описание</p>
                            <input class="form-control" type="text" v-model="description">
                            <p>Контент</p>
                            <textarea class="form-control" v-model="content"></textarea>
                            <!-- <p>Ответы</p>
                            <input type="text" class="form-control" />
                            <input type="text" class="form-control" /> -->
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
                csrf: document.head.querySelector('meta[name="csrf-token"]').content,
                title: "",
                description: "",
                content: ""
            }
        },
        methods: {
            storePoll() {
                window.axios.defaults.headers.common = {
                    'X-Requested-With': 'XMLHttpRequest',
                };
                var data = {
                    title: this.title,
                    description: this.description,
                    content: this.content
                };

                axios.post('/api/createPoll/', data, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                },
                )
                    .then(response => {
                        console.log(response)
                        this.$router.push('polls') 
                    })
                    .catch(error => {
                        console.log(error)
                    })
                }
            }
        }
</script>
