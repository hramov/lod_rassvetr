<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <a class="btn btn-primary" @click="$router.go(-1)">Back</a>

                <h1>Polls</h1>
                <div class="panel panel-default">
                    <div class="panel-heading">Polls</div>
                    <div v-for="poll in polls" class="panel-body">
                        <p>Название: {{ poll.title }}</p>
                        <p>Контент: {{ poll.content }}</p>
                        <a :href="'/#/getPoll/' + poll.id" class="button success">Click</a> 
                    </div>
                    <a :href="'/#/createPoll'" class="btn btn-primary">Crete poll</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: "",
                polls: []
            }
        },
        mounted() {
            axios.get('/api/getPolls', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                this.polls = response.data.polls
            }).catch(error => {
            })
        }
    }
</script>
