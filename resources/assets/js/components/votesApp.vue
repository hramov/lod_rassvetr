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
                    <a :href="'/#/singlePoll/' + poll.id">Голосовать</a> 
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-row
        justify="center"
        > 
        	<v-col cols="4">
        		<v-btn href="#" class="d-block pa-2 white--text" color="#3399fe" >Больше голосований</v-btn>
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
    // data: () => ({
    //     votes :[
    //         {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    //                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    //                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    //                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, rate: '20'},
    //         {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    //                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    //                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    //                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    //                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, rate: '20'},
    //         {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    //                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    //                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    //                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    //                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, rate: '20'},
    //         {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    //                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    //                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    //                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    //                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    //                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, rate: '20'},

    //     ]
    // }),
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