<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify 정</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> --> <!-- 이건 아래 script 부분에서 HelloWorld 를 임포트 했을 때 -->
      <router-view/> <!-- 이 부분에 router.js 파일을 통해 /views 폴더의 여러 .vue파일을 가져온다 -->
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  /* components: {
    HelloWorld,
  }, */
  data: () => ({
    //
  }),
};
</script>
