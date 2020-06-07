<template>
    <v-card class="pa-4">
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

        <div v-if="leader.length > 0">
            <h3>Ваш лидер - {{user.leader}}</h3>
            <p>Вы можете в любой момент отписаться от лидера. Пока вы подписаны на лидера, вы не можете участвовать в голосованиях, и вашим голосом распоряжается лидер.</p>
            <v-form>
                <input type="hidden" value="0" name="leader"/>
                <v-btn color="primary">Желаете отписаться от данного лидера?</v-btn>
            </v-form>
        </div>

        <div v-else>
            <h3>Вы не выбрали лидера</h3>
            <p>Вы можете в любой момент отписаться от лидера. Пока вы подписаны на лидера, вы не можете участвовать в голосованиях, и вашим голосом распоряжается лидер.</p>
            <v-form>
                <v-btn color="primary" @click="showLeaders">Желаете подписаться на лидера?</v-btn>
            </v-form>
        </div>

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

        <div>
            <h3>Подробная информация</h3>
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

        <h3>Результаты Ваших последних голосований</h3>
        <resultApp/>
    </v-card>
</template>

<script>
import resultApp from './resultsApp';
export default {
    data() {
        return {
            user: [],
            leader: []
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
            console.log(response.data)
            this.user = response.data;
        });

        axios.get('/getMyLeaders', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            // console.log(response.data.leader)
            this.leader = response.data.leader
        })
        .catch(e => console.log(e))
    },
    methods: {
        showLeaders() {
            this.$router.push({ name: 'showLeaders' })
        }
    }
}
</script>