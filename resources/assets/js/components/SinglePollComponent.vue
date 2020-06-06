<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <a class="btn btn-primary" @click="$router.go(-1)">Back</a>
                <h1>Polls</h1>
                <div v-if="!isEdit" class="panel panel-default">
                    <div class="panel-heading">Poll</div>
                        <p>ID: {{ id }} </p>
                        <p>Название: {{ title }}</p>
                        <p>Контент: {{ content }}</p>
                        <!-- <div v-for="answer in answers" class="panel-body"> -->
                            <div v-if="status">
                                <a class="form-control" @click="yes">За</a>
                                <a class="form-control" @click="no">Против</a>
                            </div>
                            <div v-else>
                                <p>Вы уже отвечали на этот опрос. Ваш ответ: {{ answer }}</p>
                            </div>
                        <!-- </div> -->
                        <a class="btn btn-primary" @click="editPoll">Edit Poll</a>
                        <a class="btn btn-primary" @click="deletePoll">Delete Poll</a>
                </div>
                <div v-else class="panel panel-default">
                    <div class="panel-heading">Poll</div>
                        <input type="text" name="" v-model="new_title" :placeholder="title">
                        <textarea class="form-control" v-model="new_content" :placeholder="content"></textarea>
                        <a class="btn btn-primary" @click="savePoll">Save</a>
                        <a class="btn btn-primary" @click="deletePoll">No</a>
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
                title: "",
                content: "",
                options: [],
                isEdit: false,
                new_title: "",
                new_content: "",
                status: true,
                answer: ""
            }
        },
        mounted() {
            axios.get('/api/singlePoll/' + this.$route.params.id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                console.log(response.data.answers[0].user_answer);
                this.id = response.data.poll.id
                this.title = response.data.poll.title
                this.content = response.data.poll.content
                this.status = response.data.status
                this.answer = response.data.answers[0].user_answer
                if (this.answer == 0) {
                    this.answer = "Против"
                }
                else {
                    this.answer = "За"
                }
            })
            .catch(e => console.log(e))
        },
        methods: {
            yes() {
                axios.get('/api/answer/' + this.$route.params.id + '/' + 1, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    console.log(response)
                    this.$router.push({ name: 'polls' })
                }
                    )
                .catch(e => console.log(e))
            },
            no() {
                axios.get('/api/answer/' + this.$route.params.id + '/' + 0, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    console.log(response)
                    this.$router.push({ name: 'polls' })
                })
                .catch(e => console.log(e))
            },
            deletePoll() {
                axios.get('/api/deletePoll/' + this.$route.params.id, {
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
                })
                .then(response => {
                    console.log(response)
                    this.$router.push('/polls')
                })
            },
            editPoll() {
                this.$nextTick(function() {
                    this.isEdit = true
                })
            },
            savePoll() {
                this.$nextTick(function() {
                    this.isEdit = false
                    axios.post('/api/updatePoll/' + this.$route.params.id, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    },
                    {
                        new_title: this.new_title,
                        new_content: this.new_content
                    })
                    .then(response => {
                        this.title = this.new_title
                        this.content = this.new_content
                        console.log(response)
                    })
                    .catch(e => {
                        console.log(e)
                    })
                })
            }
        }
    }
</script>
