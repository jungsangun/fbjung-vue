<template>
  <v-app>
    <!-- 여기부터 네비게이션 드로워 ********************************************-->
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <!-- <v-container> -->
          <v-list-item link to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

        <!-- </v-container> -->
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            link
            :to="subItem.to"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- 여기부터 앱바 ********************************************-->
    <v-app-bar
      color="deep-purple accent-4"
      dark
      app
    >
      <v-app-bar-nav-icon @click="test()"></v-app-bar-nav-icon>

      <v-toolbar-title>앱바내 툴바 타이틀 2019-08-09 09:50</v-toolbar-title>

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
        {
          icon: 'mdi-beer',
          title: '실험실',
          items: [
            {title: '1. 날짜비교', to: '/about1'},
            {title: '2. v-flex', to: '/about2'},
            {title: '3. 캘린더', to: '/about3'},
            {title: '4. Grids내의 input+button', to: '/about4'},
          ],
        },
        {
          icon: 'mdi-silverware-fork-knife',
          title: 'Dining 메뉴',
          active: true,
          items: [
            {title: 'about2', to: '/about2'},
            {title: 'about1', to: '/about1'},
          ],
        },
        {
          icon: 'mdi-school',
          title: 'Education',
          items: [
            {title: 'List Item'},
          ],
        },
        {
          icon: 'mdi-account-badge',
          title: 'Promotions',
          // items: [],
        },
      ],
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
