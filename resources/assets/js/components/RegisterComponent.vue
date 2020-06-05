<template>
    <div class="text-center form-wrapper">

        <form class="form-signin" v-on:submit.prevent="submitRegister">
            <img class="mb-4" src="/img/bootstrap-solid.svg" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>

            <label for="name" class="sr-only">Username</label>
            <input type="text" id="name" class="form-control" placeholder="Username" required autofocus v-model="name">

            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="email">

            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">

            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
        </form>

    </div>
</template>

<script>
    import store from '../store'
export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                registerError: false,
            }
        },
        methods: {
            submitRegister() {
                this.registerError = false;
                console.log(this.name);
                axios.post('api/auth/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }, {
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                }).then(response => {
                    console.log(response);
                    this.$router.push({ name: 'login' })
                }).catch(error => {
                    this.registerError = true
                });
            }
        }
    }
</script>

<style scoped>
    .form-wrapper {
        min-height: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>