<template>
  <div>
    <v-card>
      <v-card-title class="text-h1">
        Active Tickets
        <v-spacer></v-spacer>
        <v-btn>New Ticket</v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <Filters />
        <Tickets />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Tickets from '../components/Tickets.vue'
import Filters from '../components/Filters.vue'


export default {
  name: 'Home',
  components: {
    Tickets, 
    Filters
  }
}
</script>
