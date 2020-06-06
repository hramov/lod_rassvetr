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
                        <div v-for="option in options" class="panel-body">
                            <input type="radio" />
                        </div>
                        <a class="btn btn-primary" @click="editPoll">Edit Poll</a>
                        <a class="btn btn-primary" @click="deletePoll">Delete Poll</a>
                </div>
                <div v-else class="panel panel-default">
                    <div class="panel-heading">Poll</div>
                        <input type="text" name="" v-model="new_title" :placeholder="title">
                        <input type="text" name="" v-model="new_content" :placeholder="content">
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
                new_content: ""
            }
        },
        mounted() {
            axios.get('/singlePoll/' + this.$route.params.id)
            .then(response => {
                this.id = response.data.poll[0].id
                this.title = response.data.poll[0].title
                this.content = response.data.poll[0].content
            })
            .then(function() {
                axios.get('/getOptions/' + this.id).
                then(response => console.log(response))
            })
            .catch(e => console.log(e))
        },
        methods: {
            deletePoll() {
                axios.get('/deletePoll/' + this.id)
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
                    axios.post('/updatePoll/' + this.id, {
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
