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
                    label="Subject"
                    v-model="newTicket.Subject"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    class="mx-10"
                    label="Description"
                    v-model="newTicket.Description"
                    :rules="rule"
                    required
                />
                <v-text-field
                    class="mx-10" 
                    label="Status"
                    v-model="newTicket.Status"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    class="mx-10"
                    label="Priority"
                    v-model="newTicket.Priority"
                    :rules="rule"
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
            Subject: '',
            Description: '',
            Status:'',
            Priority: '',
            AssignedUserId: 1,
            AdminUserId: 4
        },
        rule: [v=>!!v || 'Input is required']
    }),
    computed: {
        tickets() {
            return this.$store.getters.getTickets
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('add_new_ticket', this.newTicket );
            this.$router.push('/')
        }
    },
})
</script>

