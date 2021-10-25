<template>
    <v-container>
        <v-card
          max-width="50%"
          class="mx-auto">
            <v-form
                ref="form"
                v-model="valid"    
                max-width="85%"
                class="mx-auto ma-5"
            >
                <v-card-title class="text-h4 justify-center">Register</v-card-title>
                <v-text-field 
                    class="mx-10"
                    label="First Name"
                    v-model="register.FirstName"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    class="mx-10"
                    label="Last Name"
                    v-model="register.LastName"
                    :rules="rule"
                    required
                />
                <v-text-field
                    class="mx-10" 
                    label="User Name"
                    v-model="register.UserName"
                    :rules="rule"
                    required
                />
                <v-text-field 
                    class="mx-10"
                    label="Password"
                    v-model="register.Password"
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
                Register
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>


export default {
    name: 'Register',
    data:() => ({
      valid: true,
      register: {
        FirstName: '',
        LastName: '',
        UserName: '',
        Password: ''
      },
      rule: [v=>!!v || 'Input is required']
    })
  }
</script>