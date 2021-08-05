<template>
    <v-container>
        <v-card>
            <v-form
                v-model="valid"    
            >
                <v-card-title>New Ticket</v-card-title>
                <v-text-field 
                    label="Title"
                    v-model="newTicket.title"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    label="Type"
                    v-model="newTicket.type"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    label="Client"
                    v-model="newTicket.client"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    label="Support"
                    v-model="newTicket.support"
                    :rules="rule"
                    required
                />
                <v-select
                :items="status"
                label="Standard"
                v-model="newTicket.status"
                required
                ></v-select>
            </v-form>
            <v-card-actions>
                <v-btn
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
            this.$store.dispatch('add_new_ticket', this.newTicket )
            this.$router.push('/')
        }
    },
})
</script>

