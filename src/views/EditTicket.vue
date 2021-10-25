<template>
    <v-container>
        <v-card>
            <v-form
                ref="form"
                v-model="valid"    
                max-width="85%"
                class="mx-auto ma-5"
            >
                <v-card-title class="text-h4 justify-center">Edit Ticket</v-card-title>
                <v-text-field 
                    class="mx-10"
                    label="Subject"
                    v-model="editedTicket.Subject"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    class="mx-10"
                    label="Description"
                    v-model="editedTicket.Description"
                    :rules="rule"
                    required
                />
                <v-text-field
                    class="mx-10" 
                    label="Status"
                    v-model="editedTicket.Status"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    class="mx-10"
                    label="Priority"
                    v-model="editedTicket.Priority"
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
    name: 'EditTicket',
    data:() => ({
        valid:true,
        editedTicket: {
            editedSubject: "",
            editedDescription: '',
            editedStatus:'',
            editedPriority: '',
            AssignedUserId: 1,
            AdminUserId: 4
        },
        rule: [v=>!!v || 'Input is required']
    }),
    mounted() {
        this.Subject = this.tickets.Subject;
        this.Description = this.tickets.Description;
    },
    computed: {
        tickets() {
            return this.$store.getters.getTickets
        }
    },
    methods: {
        onSubmit() {
            this.editedSubject = this.Subject;
            this.editedDescription = this.Description;
            this.editedStatus = this.Status;
            this.editedPriority = this.Priority;
            this.$store.dispatch('edit_ticket', this.editedTicket );
            this.$router.push('/')
        }
    },
})
</script>

