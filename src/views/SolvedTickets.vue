<template>
  <v-container>
    <v-card max-width="85%" class="mx-auto ma-5">
      <v-card-title class="text-h4 justify-center">  
        Solved Tickets
      </v-card-title>
      <Tickets />
    </v-card>
  </v-container>
</template>

<script>
  import Tickets from '../components/Tickets.vue'

export default {
    name: 'SolvedTickets',
    components: {
      Tickets,
    }
  }
</script>
