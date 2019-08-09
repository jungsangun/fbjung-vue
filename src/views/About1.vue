<template>
  <v-container fluid text-center>
    <v-card color="teal" dark>
        <span class="title">1. 날짜 비교</span>
    </v-card>

    <v-layout column align-center ma-5>
      <v-flex ma-5>
        <div>
          <input type="date" name="bday" value="2019-08-02">
        </div>
      </v-flex>
      <v-flex  ma-5>
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
              prepend-icon="mdi-calendar"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
};
</script>
