<template>
  <v-form v-model="valid">
    <v-container text-center>
      <v-card color="teal" dark text-center>
          <span class="title">4. Grids내의 input+button</span>
      </v-card>
    </v-container>

    <v-container grid-list-xl>
      <v-layout row>
        <v-flex>
          <v-text-field
            v-model="firstname"
            label="휴대폰번호"
          ></v-text-field>
        </v-flex>
        <v-flex shrink >
          <div class="my-2">
            <v-btn color="light-green" dark>인증요청</v-btn>
          </div>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex
          xs8
        >
          <v-text-field
            v-model="firstname"
            label="First name 8"
          ></v-text-field>
        </v-flex>

        <v-flex
          xs4
        >
          <v-text-field
            v-model="lastname"
            label="Last name  4"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <br>

    <v-container fluid>
        <v-container text-center>
        <v-card color="yellow" text-center>
            <span class="title">(참고) Grids Grow and Shrink</span>
        </v-card>
      </v-container>

      <v-layout wrap>
        <v-flex
          pa-1
        >
          <v-card
            dark
            color="green darken-3"
          >
            <v-card-text>I'm a Flex that will grow and shrink (default behavior)</v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          pa-1
        >
          <v-card
            dark
            color="green darken-1"
          >
            <v-card-text>I'm a Flex that will grow and shrink (default behavior)</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex
          pa-1
        >
          <v-card
            dark
            color="green darken-1"
          >
            <v-card-text>I'm a Flex that will grow and shrink (default behavior)</v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          grow
          pa-1
        >
          <v-card
            dark
            color="green lighten-1"
          >
            <v-card-text>I'm a Flex with a lot of content that will NOT shrink when the content is wider than the available width in the row. Try resizing the window</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex
          pa-1
        >
          <v-card
            dark
            color="green darken-4"
          >
            <v-card-text>I'm a Flex that will grow and shrink (default behavior)</v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          shrink
          pa-1
        >
          <v-card
            dark
            color="green darken-3"
          >
            <v-card-text>I'm a Flex that will NOT grow</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex
          grow-shrink-0
          pa-1
        >
          <v-card
            dark
            color="green"
          >
            <v-card-text>I'm a Flex that will NOT grow OR shrink</v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          grow-shrink-0
          pa-1
        >
          <v-card
            dark
            color="green lighten-1"
          >
            <v-card-text>I'm a Flex that will NOT grow OR shrink</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-form>

  
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }
</script>