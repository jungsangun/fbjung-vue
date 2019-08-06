<!-- App.vue -->
<template>
	<v-app>
    <!-- 네비게이션 드라와 ********************************************** -->
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <!-- 앱바 **********************************************************-->
    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- 여긴 콤포넌트 기반 콘텐츠 ****************************************-->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- 뷰라우터 -->
        <router-view></router-view>

      </v-container>
    </v-content>

    <!-- 푸터 *********************************************************** -->
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
  // 
</script>
