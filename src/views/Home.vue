<template>
  <v-card 
    max-width="85%"
    class="mx-auto ma-5">
    <v-card-title class="text-h4 px-10 py-5">
      Active Tickets
      <v-spacer></v-spacer>
      <v-btn 
        class="float-right white--text purple"
        @click="addNewTicket">
        New Ticket</v-btn>
    </v-card-title>
    <v-divider class="mb-5"></v-divider>
    <v-card-text>
      <Filters class="mb-10"/>
      <Tickets />
    </v-card-text>

  </v-card>
</template>

<script>
  import Tickets from '../components/Tickets.vue'
  import Filters from '../components/Filters.vue'

  export default {
    name: 'Home',

    components: {
      Tickets,
      Filters
    },
    methods: {
      addNewTicket() {
        this.$router.push('/newTicket')
      }
    }
  }
</script>
