<template>
    <div>
        <v-row justify="center">
            <v-col cols="3"
            v-for="(poll, index) in polls">
                <v-card
                    class="mx-auto"       
                    cols='3'
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    src="https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200"
                    >
                    <v-card-title>{{ poll.title }}</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary">
                    <div>{{ poll.description }}</div>
                    <div class="mt-2"><strong>За голосование Вы получите +20 баллов</strong></div>
                    </v-card-text>

                    <v-card-actions>
                    <!-- <v-btn
                    @click="vote"
                        color="green"
                        text
                    >
                        Голосовать
                    </v-btn> -->
                    <a :href="'/#/singlePoll/' + poll.id">Открыть</a> 
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row
        justify="center"
        > 
        	<v-col cols="4">
        		<v-btn href="/#/allPolls" class="d-block pa-2 white--text" color="#3399fe" >Больше голосований</v-btn>
        	</v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            polls: [],
            user: []
        }
    },
    mounted() {
        axios.get('/getPolls/', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            this.polls = response.data.polls
            console.log(response.data.polls[0])
        }).catch(error => {
        })
    },
    methods: {
        // vote() {
        //     this.$router.push('/#/singlePoll/');
        // }
    }
};
</script>