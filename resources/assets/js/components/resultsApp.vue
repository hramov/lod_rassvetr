<template>
    <div>
        <v-row justify="center">
            <v-col cols="3"
            v-for="poll in polls">
                <v-card
                    class="mx-auto"
                    cols='3'
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200'"
                    >
                    <v-card-title>{{poll.name}}</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary">
                        <v-row justify="center">
                            <v-col cols="5">{{poll.created_at}}</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="3">{{poll.city}}</v-col>
                        </v-row>
                    <div>{{poll.description}}</div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="orange"
                        text
                    >
                        Подробнее
                    </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
            <v-row
            justify="center"
            > 
                <v-col cols="4">
                    <v-btn href="/#/allResults" class="d-block pa-2 white--text" color="#3399fe">Больше результатов</v-btn>
                </v-col>
            </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            polls: []
        }
    },
    mounted() {
        axios.get('/getPollsEnded', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            this.polls = response.data
            // console.log(response.data)
        }).catch(error => {
        })
    },
}
</script>
