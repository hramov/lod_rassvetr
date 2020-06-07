<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <div v-if="!$store.state.isLoggedIn">
      <v-btn dark color="primary" v-on="on">
        Войти
      </v-btn>
    </div>
    <div v-else>
      <v-btn @click.prevent="getAccount">
        Мой кабинет
      </v-btn>
      <v-btn @click.prevent="logout">
        Выйти
      </v-btn>
    </div>
    </template>
    <v-card v-if="isRegister">
      <v-card-title>
        <span class="headline">Регистрация</span>
        <v-btn color="grey" absolute right text @click="dialog = false"><v-icon dark> mdi-close-circle</v-icon></v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Имя*" prepend-inner-icon='mdi-account' :rules="nameRules" required v-model="name"></v-text-field>

            </v-col>
            <v-col cols="12" sm="6" md="6">         
              <v-text-field
                label="Фамилия*"
                prepend-inner-icon='mdi-account-outline'
                required
                v-model="surname"
                :rules="nameRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*"  prepend-inner-icon="mdi-email" :rules="emailRules" required v-model="email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Пароль*" :prepend-inner-icon='compareLock' type="password" required v-model="password" @blur="comparePassword" :style="equalColor"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Повторить пароль*" :prepend-inner-icon='compareLock' type="password" required v-model="user_password2" @blur="comparePassword" :style='equalColor'></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Номер телефона" prepend-inner-icon='mdi-phone' v-model="phone"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" >
              <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
              >
                  <template v-slot:activator="{ on }">
                  <v-text-field
                      v-model="birthday"
                      label="Дата рождения"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                  ></v-text-field>
                  </template>
                  <v-date-picker
                  ref="picker"
                  v-model="birthday"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1940-01-01"
                  @change="save"
                  ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete v-model="city" prepend-inner-icon='mdi-city'
                :items="['Горно-Алтайск', 'Чемал', 'Майма', 'Кош-Агач', 'Турочак', 'Онугдай', 'Шебалино', 'Кызыл-Осек', 'Усть-Кокса']"
                label="Город"
                single-line
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*Обязательные поля</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="isLogin = true; isRegister = false">Войти</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false; submitRegister()" :disabled="!valid">Зарегистрироваться</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-if="isLogin">
      <v-card-title>
          <span class="headline">Авторизация</span>
          <v-btn color="grey" absolute right text @click="dialog = false"><v-icon dark> mdi-close-circle</v-icon></v-btn>
      </v-card-title>
      <v-card-text>
          <v-col cols="12">
              <v-text-field label="Email" prepend-inner-icon='mdi-email' required v-model="loginEmail" :rules="emailRules"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Пароль" prepend-inner-icon='mdi-lock' type="password" required v-model="loginPassword"></v-text-field>
            </v-col>
      </v-card-text>
      <v-card-actions>
          
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="isRegister = true; isLogin = false">Зарегистрироваться</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false; submitLogin()" :disabled="!valid">Войти</v-btn>
      </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<script>
import store from '../store'
export default {
    data() {
      return{
        valid: true,
      nameRules: [
        v => !!v || 'Отсутствует Имя/Фамилия'
      ],
      emailRules: [
        v => !!v || 'Отсутствует E-mail',
        v => /.+@.+..+/.test(v) || 'Неверный адрес'
      ],
      dialog: false,
      isRegister: false,
      isLogin: true,
      date: null,
      menu: false,
      user_password2: '',
      compareLock: 'mdi-lock-open',
      equalColor:'color: black',
        name: '',
        surname: '',
        email: '',
        password: '',
        phone:'',
        city: '',
        birthday: '',
        registerError: false,
          loginEmail: '',
          loginPassword: '',
        user: []
      }
    },
    mounted() {
      axios.get('/user', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        ).then(response => {
            console.log(response.data)
            this.user = response.data;
        });
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      logout() {
        this.$router.push('logout')
      },
      getAccount () {
        this.$router.push({name: 'admin', params: { 'id': this.user.id }})
      },
      save (birthday) {
        this.$refs.menu.save(birthday)
      },
      comparePassword() {
        if (this.password == this.user_password2){
          this.compareLock = 'mdi-lock';
          this.equalColor = 'color: green';
        }
        else {
          this.compareLock = 'mdi-lock-open';
        }
        },
      submitRegister() {
              this.registerError = false;
              axios.post('api/auth/register', {
                  name: this.name,
                  surname: this.surname,
                  email: this.email,
                  password: this.password,
                  phone:this.phone,
                  birthday: this.birthday,
                  city: this.city,

              }, {
                  headers: {
                      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                  }
              }).then(response => {
                  console.log(response);       
                      this.isLogin = true; 
                      this.isRegister = false;
                      this.$router.push({ name: 'createPoll' })
              }).catch(error => {
                  this.registerError = true
              });
        },
        submitLogin() {
            this.loginError = false;
            axios.post('/api/auth/login', {
                email: this.loginEmail,
                password: this.loginPassword
            }).then(response => {
                // login user, store the token and redirect to dashboard
                store.commit('loginUser')
                localStorage.setItem('token', response.data.access_token)
                this.$router.push({ name: 'mainContent' }) 

            }).catch(error => {
                this.loginError = true
                this.session_data_error = true
                console.log("ERROR logging")
            });
        },
        logout() {
          localStorage.removeItem('token')
          store.commit('logoutUser')
          this.$router.push({ name: 'mainContent' })
        }
    },
  }
</script>

<style>
    * {
      text-decoration: none !important;
    }
</style>