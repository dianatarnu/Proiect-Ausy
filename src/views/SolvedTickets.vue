<template>
  <div class="about">
    <h1>Solved Tickets</h1>
    <Tickets />
  </div>
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
