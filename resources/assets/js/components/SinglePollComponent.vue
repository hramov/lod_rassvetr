<template>
    <v-container>
        <v-row>
            <v-btn color="primary" class="mt-2" @click="$router.go(-1)">Назад </v-btn>
            <v-col
                    lg = "6">
                <h1 class="display-1">{{ title }}</h1>
            </v-col>
        </v-row>
        <v-row class="d-flex align-center">
            <v-col lg="10">
                <v-chip
                color = '#3399FE'
                text-color = white>
                    + 20 баллов
                </v-chip>
                <span class="ml-2 text--secondary">за участие в голосовании</span>
            </v-col>
            <v-col lg="2" class="justify-end d-flex">
                <div class="justify-center d-flex block-id-pall subtitle-1 align-center">
                    ID <span class="id-pall"> {{ id }}</span>
                </div>
            </v-col>
        </v-row>
        <v-container>
            <v-row>
                <v-col lg="12" class="wrap-pall">
                    <v-row>
                        <v-col lg="3">
                            <h2 class="headline">Вопрос 1</h2>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col lg="12">
                            <p class="title">
                                {{ description }}
                            </p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col lg="12">
                            <strong class="font-weight-black">А вы поддерживаете это предложение?</strong>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col lg="12">
                            <v-expansion-panels>
                                <v-expansion-panel
                                        v-for="(item , i) in 1"
                                        :key="i"
                                >
                                    <v-expansion-panel-header>Подробнее</v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        {{ content }}
                                    </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col lg="12">
                            <h3 class="title">Лидеры мнений</h3>
                            <div v-for="leader, index in leaders">
                                <p>{{ leader.name }} {{ leader.weight }}</p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col lg="6">
                            <v-avatar
                                    v-for="(item, i) in 4"
                                    :key = "i"
                                    size="84"
                                    class="mr-3"
                            >
                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col lg="12">
                            <hr>
                            <a @click="yes()" href="" class="form-control" style="text-decoration: none;">Вариант "За"</a>
                            <hr>
                            <a @click="no()" href="" class="form-control" style="text-decoration: none;">Вариант "Против"</a>
                            
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-row>
        </v-row>
        <v-row>
            <v-col>
                <a class="btn btn-primary" @click="editPoll">Редактировать</a>
                <a class="btn btn-danger" @click="deletePoll">Удалить</a>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                id: "",
                title: "",
                content: "",
                options: [],
                isEdit: false,
                new_title: "",
                description: "",
                new_content: "",
                status: true,
                answer: "",
                leaders: []
            }
        },
        mounted() {
            axios.get('/api/singlePoll/' + this.$route.params.id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                console.log(response.data);
                this.id = response.data.poll.id
                this.title = response.data.poll.title
                this.description = response.data.poll.description
                this.content = response.data.poll.content
                this.status = response.data.status
                this.answer = response.data.answers[0].user_answer

                if (this.answer == 0) {
                    this.answer = "Против"
                }
                else {
                    this.answer = "За"
                }

            })
            .catch(e => console.log(e))

            axios.get('/show_leaders', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                console.log(response.data.data)
                this.leaders = response.data.data.splice(1,5)
            })
            .catch(e => console.log(e))
        },
        methods: {
            yes() {
                axios.get('/api/answer/' + this.$route.params.id + '/' + 1, {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(response => {
                    console.log(response)
                    this.$router.push({ name: '/' })
                })
                .catch(e => console.log(e))
            },
            no() {
                axios.get('/api/answer/' + this.$route.params.id + '/' + 0, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    console.log(response)
                    this.$router.push({ name: '/' })
                })
                .catch(e => console.log(e))
            },
            deletePoll() {
                axios.get('/api/deletePoll/' + this.$route.params.id, {
                    headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
                })
                .then(response => {
                    console.log(response)
                    this.$router.push('/polls')
                })
            },
            editPoll() {
                this.$nextTick(function() {
                    this.isEdit = true
                })
            },
            savePoll() {
                this.$nextTick(function() {
                    this.isEdit = false
                    axios.post('/api/updatePoll/' + this.$route.params.id, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    },
                    {
                        new_title: this.new_title,
                        new_content: this.new_content
                    })
                    .then(response => {
                        this.title = this.new_title
                        this.content = this.new_content
                        console.log(response)
                    })
                    .catch(e => {
                        console.log(e)
                    })
                })
            }
        }
    }
</script>

<style scoped> 
.block-id-pall {
        width: 55px;
        height: 44px;
        border: 1px solid #3399FE;
    }
    .wrap-pall {
        border: 1px solid #3399FE;
    }
</style>
