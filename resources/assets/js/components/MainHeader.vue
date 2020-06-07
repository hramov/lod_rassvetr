<template>
	 <v-card
    color="grey lighten-4"
    tile
  >
  <v-container >

    <v-toolbar flat color="grey lighten-4">
      <v-img src="./img/logo.png" aspect-ratio="7" contain position="left"/>
      <v-row justify="center">

        <div height="36px">
            <v-btn 
              v-for="(item, index) in items"
              :key="index"
              :href="item.href"
              class="pa-2"
              text
              color="green--text"
              >
              <span class="d-none d-md-flex"> {{ item.title }} </span>
            </v-btn>

        </div> 
        <v-spacer></v-spacer>

        <v-card>
          <AuthorizationComponent/>
        </v-card>

      </v-row>

    </v-toolbar>
  
  </v-container>
  </v-card>
</template>

<script>
  import AuthorizationComponent from './AuthorizationComponent'
  export default {
    
    name: 'App',

    components: {
      AuthorizationComponent
    },

    data: () => ({
        items: [
        { title: 'Голосования', icon:'mdi-vote', href:'/#/allPolls' },
        { title: 'Результаты', icon:'mdi-bookmark-outline', href:'/#/allResults'},
        // { title: 'Магазин поощрений', icon: 'mdi-cart', href:'#' },
        { title: 'Создать опрос', icon: 'mdi-cart', href:'/#/createPoll' },
        { title: 'Таблица лидеров', icon: 'mdi-cart', href:'/#/leadersTable' },
      ]
    })
};
</script>

<style scoped>
* {
  text-decoration: none;
}
</style> 