<template>
	 <v-card
    color="grey lighten-4"
    tile
  >
  <v-container >

    <v-toolbar flat color="grey lighten-4">
      <v-row justify="center">
        <v-toolbar-title class="mr-3 pl-2 pr-2 green">STFU</v-toolbar-title>
        <div height="36px">
          <!-- <v-toolbar-items-group > -->
            <v-btn 
              v-for="(item, index) in items"
              :key="index"
              :href="item.href"
              class="pa-2"
              text
              color="tex--green"
              >
              <span class="d-none d-md-flex"> {{ item.title }} </span>
            </v-btn>
          <!-- </v-toolbar-items-group> -->

        </div> 
        <v-spacer></v-spacer>

        <v-card>
          <AuthorizationComponent />
        </v-card>

        <!-- <v-card>{{ user.name }}</v-card> -->
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
        { title: 'Таблица лидеров', icon: 'mdi-cart', href:'/#/leaderTable' },
      ]
    })
};
</script>