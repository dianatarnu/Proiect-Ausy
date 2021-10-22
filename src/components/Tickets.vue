<template>
  <div>
    <v-card
      class="mx-auto 
        my-20
        mb-5
        rounded-lg"
      max-width="35%"
      outlined
      v-for="(ticket, id) in tickets"
      :key="id"
    >
      <v-container>
        <v-card-title class="text-h5 font-weight-medium" >{{ ticket.subject }}</v-card-title>
        <v-card-subtitle class="grey--text">{{ ticket.description }}</v-card-subtitle>
        <v-card-subtitle class="grey--text">{{ ticket.id }}</v-card-subtitle>
        <v-card-subtitle class="grey--text">{{ ticket.adminUserId }}</v-card-subtitle>
        <v-card-subtitle class="grey--text">{{ ticket.assignedUserId }}</v-card-subtitle>
        <v-card-subtitle class="grey--text">{{ ticket.priority }}</v-card-subtitle>
        <v-card-subtitle class="grey--text">{{ ticket.status }}</v-card-subtitle>
        <v-card-subtitle class="grey--text">{{ ticket.creationDate }}</v-card-subtitle>

        <v-card-actions>
          <v-btn 
            class="green--text 
              text-md-body-1 
              font-weight-medium" 
              text>
              Edit
          </v-btn>
          <v-btn 
            class="purple--text 
              text-md-body-1 
              font-weight-medium" 
              text
              @click="onSolvedTicket(ticket.id)">
              Solve Ticket
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card> 
  </div>
</template>

<script>
  export default {
    name: 'Tickets',
    computed: {
      tickets() {
        return this.$store.getters.getTickets;
      }
    }, 
    methods: {
      onSolvedTicket(id) {
        this.$router.push('/solvedtickets')
        this.$store.dispatch("solve_ticket", id);
      }
    },
    created() {
      this.$store.dispatch("get_tickets_from_api");
    }
  }
</script>
