<template>
  <div>
    <v-card
      class="mx-auto 
        my-20
        mb-5
        rounded-lg"
      elevation="4"
      max-width="45%"
      outlined
      v-for="(ticket, id) in tickets"
      :key="id"
    >
      <v-container class="py-5" >
        <v-card-actions class="justify-end">
          <v-btn 
            class="black--text 
              text-md-body-1 
              font-weight-medium" 
              text
              @click="onDeleteTicket(id)">
              X
          </v-btn>
        </v-card-actions>

        <v-card-title class="text-h5 font-weight-medium justify-center pb-10" >Subject: {{ ticket.subject }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1 grey--text py-1">Description: {{ ticket.description }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1 grey--text py-1">Ticket Id: {{ ticket.id }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1 grey--text py-1">Admin Id: {{ ticket.adminUserId }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1 grey--text py-1">Assigned User Id: {{ ticket.assignedUserId }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1 grey--text py-1">Priority: {{ ticket.priority }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1 grey--text py-1">Status: {{ ticket.status }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1 grey--text py-1">Creation Date:{{ ticket.creationDate }}</v-card-subtitle>

        <v-card-actions class="justify-end">
          <v-btn 
            class="green--text 
              text-md-body-1 
              font-weight-medium" 
              text
              @click="editTicket">
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
      },
      editTicket() {
        this.$router.push('/editTicket')
        this.$store.dispatch("edit_ticket");
      },
      onDeleteTicket(id) {
        // const ticketIndex = this.tickets.indexOf(ticket)
        // this.tickets.splice(ticketIndex, 1)
        this.$store.dispatch("delete_ticket", id)
      }
    },
    created() {
      this.$store.dispatch("get_tickets_from_api");
    }
  }
</script>
