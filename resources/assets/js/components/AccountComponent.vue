<template>
    <v-card class="pa-4">
        <v-btn absolute right fab @click="settingsProfile = !settingsProfile;"><v-icon>mdi-tools</v-icon></v-btn>
        <div >
            <div class="float-left">
                <v-avatar color="primary lighten-2">
                    <span class="text--white"><strong>ИИ</strong></span>
                </v-avatar>
            </div>
            <v-card-title>{{user.surname}} {{user.name}}</v-card-title>
            <v-card-text>
                <div>Ваш рейтинг: {{ user.rate }}</div>
                <div>Ваш статус: {{ user.status }}</div>
                <div>Количество людей, поддерживающих Вас: {{ user.weight }}</div>
            </v-card-text>
        </div>

        <div v-if="user.status == 0">
            <h3>Ваш лидер - <a href="">{{ leader.name }}</a></h3>
            <p>Вы можете в любой момент отписаться от лидера. Пока вы подписаны на лидера, вы не можете участвовать в голосованиях, и вашим голосом распоряжается лидер.</p>
            <v-form>
                <input type="hidden" value="0" name="leader"/>
                <v-btn @click="unsubscribe" color="primary">Желаете отписаться от данного лидера?</v-btn>
            </v-form>
        </div>

        <div v-else>
            <h3>Вы не выбрали лидера</h3>
            <p>Вы можете в любой момент отписаться от лидера. Пока вы подписаны на лидера, вы не можете участвовать в голосованиях, и вашим голосом распоряжается лидер.</p>
            <v-form>
                <v-btn color="primary" @click="subscribe">Желаете подписаться на лидера?</v-btn>
            </v-form>
        </div>
        <hr>
        <div>
            <h3>Контактная информация</h3>
            <v-row no-gutters>
                <v-col cols="12" xs="6" md="4"   class="pa-2">
                    <v-icon class="float-left mr-2" large color="blue darken-2">mdi-account</v-icon>
                    <v-card-subtitle class="pa-0">ФИО</v-card-subtitle>
                    <v-card-text>{{ user.surname}} {{user.name}} {{user.second_name}}</v-card-text>
                </v-col>
                <v-col cols="12" xs="6" md="4"   class="pa-2">
                    <v-icon class="float-left mr-2" large color="blue darken-2">mdi-phone</v-icon>
                    <v-card-subtitle class="pa-0">Телефон</v-card-subtitle>
                    <v-card-text>{{ user.phone }}</v-card-text>
                </v-col>
                <v-col cols="12" xs="6" md="4"  class="pa-2">
                    <v-icon class="float-left mr-2" large color="blue darken-2">mdi-email</v-icon>
                    <v-card-subtitle class="pa-0">Email</v-card-subtitle>
                    <v-card-text>{{ user.email }}</v-card-text>
                </v-col>
            </v-row>
        </div>

        <div>
            <h3>Подробная информация</h3>
            <v-row no-gutters>
                <v-col cols="12" xs="6" md="4"   class="pa-2 ">
                    <v-icon class="float-left mr-2" large color="blue darken-2">mdi-city</v-icon>
                    <v-card-subtitle class="pa-0">Город</v-card-subtitle>
                    <v-card-text>{{ user.city }}</v-card-text>
                </v-col>
                <v-col cols="12" xs="6" md="4"   class="pa-2">
                    <v-icon class="float-left mr-2" large color="blue darken-2">mdi-lead-pencil</v-icon>
                    <v-card-subtitle class="pa-0">Профессия</v-card-subtitle>
                    <v-card-text>{{ user.proffesion }}</v-card-text>
                </v-col>
                <v-col cols="12" xs="6" md="4"   class="pa-2">
                    <v-icon class="float-left mr-2" large color="blue darken-2">mdi-book-open</v-icon>
                    <v-card-subtitle class="pa-0">О себе</v-card-subtitle>
                    <v-card-text>{{ user.about }}</v-card-text>
                </v-col>
            </v-row>
        </div>
        
        <div v-if="settingsProfile">
        <hr>
            <h3>Редактировать информацию</h3>
            <v-form>
                <v-row no-gutters>
                    <v-col cols="12" xs="6" md="4" class="pa-2">
                        <v-text-field
                            prepend-inner-icon="mdi-city large"
                            color="blue darken-2"
                            label="Город"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" xs="6" md="4"  class="pa-2">
                        <v-text-field
                            prepend-inner-icon="mdi-lead-pencil"
                            color="blue darken-2"
                            label="Профессия"
                            ></v-text-field>
                    </v-col>
                    <v-col cols="12" xs="6" md="4"  class="pa-2">
                        <v-file-input show-size label="Аватар"></v-file-input>
                    </v-col>
                    <v-col cols="12" xs="6" md="4"  class="pa-2">
                        <v-textarea
                        prepend-inner-icon="mdi-book-open"
                        color="blue darken-2"
                        outlined
                        label="О себе"
                        value=""
                        ></v-textarea>
                    </v-col>
                    
                </v-row>
                <v-btn color="primary" type="submit">Отправить</v-btn>
            </v-form>
        </div>
        <hr>
        <h3>Мои опросы</h3>
        <!-- <resultApp/> -->
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
                        Подробнее
                    </a>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <hr>
        <h3>Мои голосования</h3>
        <v-row justify="center">
            <v-col cols="3"
            v-for="answer in answers">
                <v-card
                    class="mx-auto"
                    cols='3'
                >
                    <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="'https://avatars.mds.yandex.net/get-zen_doc/1657335/pub_5d33cf0414f98000adeae2dd_5d33d0cbc31e4900ad7fdddc/scale_1200'"
                    >
                    <v-card-title>{{answer.title}}</v-card-title>
                    </v-img>

                    <v-card-text class="text--primary">
                        <v-row justify="center">
                            <v-col cols="5">{{answer.created_at}}</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="3">{{answer.city}}</v-col>
                        </v-row>
                    <div>{{answer.description}}</div>
                    </v-card-text>

                    <v-card-actions>
                    <a :href="'/#/singlePoll/' + answer.id"
                        color="orange"
                        text
                    >
                        Подробнее
                    </a>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import resultApp from './resultsApp';
export default {
    data() {
        return {
            user: [],
            leader: [],
            polls: [],
            answers: [],
            settingsProfile: false
        }
    },
    components : {
        resultApp
    },
    mounted() {
        axios.get('/user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            // console.log(response.data)
            this.user = response.data;
        });

        axios.get('/getMyLeaders', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            // console.log(response.data.leader[0])
            this.leader = response.data.leader[0]
        })
        .catch(e => console.log(e))

        axios.get('/getMyPolls', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            // console.log(response.data)
            this.polls = response.data;
        });

        axios.get('/getMyAnswers', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log(response.data[0][0].title)
            this.answers = response.data[0]
        });

    },
    methods: {
        subscribe() {
            this.$router.push({name: 'showLeaders'})
        },
        unsubscribe() {
            axios.get('/unsubscribe/' + this.leader.id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                console.log(response);
                axios.get('/getMyLeaders', {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(response => {
                    // console.log(response.data.leader[0])
                    this.leader = response.data.leader[0]
                })
                .catch(e => {
                    console.log(e)
                    this.user.status = 1
                })
        })
    }
}
}
</script>

<style>
*{
    outline:none !important;
}
</style>