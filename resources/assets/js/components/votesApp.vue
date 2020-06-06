<template>
    <div>
        <v-row justify="center">
            <v-col cols="3"
            v-for="(vote, index) in votes"
                :key="index">
                <v-card
                    class="mx-auto"       
                    cols='3'
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="vote.pic"
                    >
                    <v-card-title>{{vote.name}}</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary">
                    <div>{{vote.prew}}</div>
                    <div class="mt-2"><strong>За голосование Вы получите +{{ vote.rate }} баллов</strong></div>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        color="green"
                        text
                    >
                        Голосовать
                    </v-btn>

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
    data: () => ({
        votes :[
            {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, rate: '20'},
            {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, rate: '20'},
            {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, rate: '20'},
            {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, rate: '20'},

        ]
    }),
};
</script>