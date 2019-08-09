<template>
  <v-app>
    <!-- 여기부터 앱바 ********************************************-->
    <v-app-bar
      color="deep-purple accent-4"
      dark
      app
    >
      <v-app-bar-nav-icon @click="test()"></v-app-bar-nav-icon>

      <v-toolbar-title>페이지 title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- 여기부터 네비게이션 드로워 ********************************************-->
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 여기부터 컨텐츠 ********************************************-->
    <v-content>
      <!-- <HelloWorld/> --> <!-- 이건 아래 script 부분에서 HelloWorld 를 임포트 했을 때 -->
      <router-view></router-view> <!-- 이 부분에 router.js 파일을 통해 /views 폴더의 여러 .vue파일을 가져온다 -->
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        {title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
        {title: 'About', icon: 'mdi-image', to: '/about'},
        {title: 'About2', icon: 'mdi-help-box', to: 'about2'},
      ],
      right: null,
      drawer: false,
    };
  },
  methods: {
    // test: function(event){
    test: function() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
