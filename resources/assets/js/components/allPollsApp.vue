<template>
    <v-container>
        <v-row>
            <v-col lg="12">
                <a class="btn btn-primary" @click="$router.go(-1)">Back</a>
                <h1 class="display-1">Как мы изменяем Алтай</h1>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="3"
                   v-for="(poll, index) in polls"
                   :key="index">
                <v-card
                        class="mx-auto"
                        max-width="400"
                        cols='3'
                >
                   <!--  <v-img
                            class="white--text align-end"
                            height="200px"
                            :src="result.pic"
                    > -->
                        <v-card-title>{{poll.title}}</v-card-title>
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
                        <a :href="'/#/singlePoll/' + poll.id"
                                color="orange"
                                text
                        >
                            Открыть
                        </a>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <!-- <v-col class="d-flex justify-center" lg="12">
                <v-btn href="#" class="pa-2 text--lighten-1" color="#3399fe">Показать ещё</v-btn>
            </v-col> -->
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            polls: []
        }
    },
    mounted() {
        axios.get('/getPollsAll', {
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })
        .then(response => {
            this.polls = response.data;
            console.log(response.data)
        })
        .catch(e => console.log(e))
    }
};
</script>