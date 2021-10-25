<template>
    <v-container>
        <v-card 
          max-width="50%"
          class="mx-auto">
            <v-form
                ref="form"
                v-model="valid"    
                class="mx-auto ma-5"
            >
                <v-card-title class="text-h4 justify-center">Login</v-card-title>
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
                Login
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
        UserName: '',
        Password: ''
      },
      rule: [v=>!!v || 'Input is required']
    })
  }
</script>