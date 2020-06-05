<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h1>Polls</h1>
                <div class="panel panel-default">
                    <div class="panel-heading">Polls</div>
                    <div v-for="poll in polls" class="panel-body">
                        <p></p>
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
                data: ""
            }
        },
        mounted() {
            axios.get('/getPolls')
            .then(response => {
                console.log(response)
            }).catch(error => {
            })
        }
    }
</script>
