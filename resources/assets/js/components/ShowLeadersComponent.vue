<template>
    <v-card class="pa-3">
        <h2>Лидеры мнений</h2>
        <v-row justify="center">
            <v-col cols="12"
            sm="4" 
            md="3"
            v-for="(user, index) in users"
            :key="index">
                <v-card
                    class="mx-auto"
                >
                    <v-list-item>
                    <v-list-item-avatar color="grey">
                        <v-img :src="user.pic"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{user.name}}</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>

                    <v-card-text>
                        <p>{{user.about}}</p>
                        <p>Рейтинг пользователя <strong>{{ user.weight }}</strong> </p>
                    </v-card-text>

                    <v-card-actions>
                    <v-btn
                        text
                        color="primary"
                        @click="subscribe(user.id)"
                        :disabled="statusControl"
                    >
                        Подписаться
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <div class="text-center">
            <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
            ></v-pagination>
        </div>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: "",
            users: [],
            statusControl: false
        }
    },
    created() {
        this.isLoggedIn = this.$store.state.isLoggedIn;
        console.log(this.isLoggedIn);

        axios.get('/show_leaders', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            // console.log(response.data.data)
            this.users = response.data.data
        })
        .catch(err => console.log(err))
    },
    methods: {
        subscribe(id) {
            axios.get('/subscribe/' + id, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                if (response.data.status == 0) {
                    this.statusControl = true
                }
            })
            .catch(e => console.log(e))
        }
    }
}
</script>
