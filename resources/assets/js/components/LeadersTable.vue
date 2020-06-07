<template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="leaders"
      :search="search"
      v-for="leadersTable in GETLEADERS"
      :key="index"
      :leader_data='leadersTable'
    ></v-data-table>
  </v-card>
</template>

<script>
// import {mapActions, mapGetters} from 'vuex'
  export default {
    data () {
      	return {
      		leaders: [],
        	// search: ''
    	}
    },
  //       headers: [
  //         {
  //           text: 'Leaders task',
  //           align: 'start',
  //           sortable: false,
  //           value: 'name',
  //         },
  //         { text: 'Name', value: 'name' },
  //         { text: 'Surname', value: 'surname' },
  //         { text: 'Subscribers', value: 'weight' },
  //         { text: 'Status', value: 'status' },
  //       ]
  //     }
  // },
  //     computed: {
  //     	...mapGetters([
  //     		'GETLEADERS'
  //     		])
  //     },
  //     methods: {
  //     	...mapActions([
  //     		'GET_LEADERS_FROM_TABLE'
  //     	]),
  //     },
      created() {
      	// this.GET_LEADERS_FROM_TABLE()

      	axios.get('/show_leaders', {
      		headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
      	})
      	.then(response => {
      		console.log(response.data.data);
      		this.leaders = response.data;
      	})
      	.catch(e => console.log(e))
      }
    }

</script>