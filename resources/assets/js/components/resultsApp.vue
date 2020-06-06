<template>
    <div>
        <v-row justify="center">
            <v-col cols="3"
            v-for="(result, index) in results"
                :key="index">
                <v-card
                    class="mx-auto"
                    cols='3'
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="result.pic"
                    >
                    <v-card-title>{{result.name}}</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary">
                        <v-row justify="center">
                            <v-col cols="5">{{result.date}}</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="3">{{result.city}}</v-col>
                        </v-row>
                    <div>{{result.prew}}</div>
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
                    <v-btn href="#" class="d-block pa-2 white--text" color="#3399fe">Больше результатов</v-btn>
                </v-col>
            </v-row>
    </div>
</template>

<script>
export default {
    data: () => ({
        results :[
            {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: 'Описание', date: '11.01.1970', city: 'Город'},
            {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: 'Описание', date: '11.01.1970', city: 'Город'},
            {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: 'Описание', date: '11.01.1970', city: 'Город'},
            {name: 'Название голосование', pic: 'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200', prew: 'Описание', date: '11.01.1970', city: 'Город'},


        ]
    }),
};
</script>
