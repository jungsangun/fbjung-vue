<template>
  <v-layout column align-center="">
    <h1>날짜 입력 비교.</h1>
    <hr>
    <br>
    <br>
    <v-flex>
      <div>
        <input type="date" name="bday">
      </div>
    </v-flex>
    <hr>
    <br><br>
    <v-flex>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            prepend-icon="mdi-calendar"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
      </v-menu>
    </v-flex>
    
  </v-layout>

</template>  

<script>
  export default {
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
  }
</script>