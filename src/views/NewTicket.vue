<template>
    <v-container>
        <v-card>
            <v-form
                ref="form"
                v-model="valid"    
                max-width="85%"
                class="mx-auto ma-5"
            >
                <v-card-title class="text-h4 justify-center">New Ticket</v-card-title>
                <v-text-field 
                    class="mx-10"
                    label="Title"
                    v-model="newTicket.title"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    class="mx-10"
                    label="Type"
                    v-model="newTicket.type"
                    :rules="rule"
                    required
                />
                <v-text-field
                    class="mx-10" 
                    label="Client"
                    v-model="newTicket.client"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    class="mx-10"
                    label="Support"
                    v-model="newTicket.support"
                    :rules="rule"
                    required
                />
                <v-select
                    class="mx-10"
                    :items="status"
                    label="Status"
                    v-model="newTicket.status"
                    required
                />
            </v-form>
            <v-card-actions class="justify-center">
                <v-btn
                    class="white--text purple mb-10"
                    x-large
                    :disabled="!valid"
                    @click="onSubmit"
                >
                Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default ({
    name: 'NewTicket',
    data:() => ({
        valid:true,
        newTicket: {
            title: '',
            type: '',
            client:'',
            support: '',
        },
        status: ['Assigned', 'Solved'],
        rule: [v=>!!v || 'Input is required']
    }),
    computed: {
        tickets() {
            return this.$store.getters.getTickets
        }
    },
    methods: {
        onSubmit() {
            this.newTicket.id = this.$store.state.length + 1;
            this.$store.dispatch('add_new_ticket', this.newTicket );
            this.$router.push('/')
        }
    },
})
</script>

