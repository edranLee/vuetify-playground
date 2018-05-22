<template>
<v-app>
  <!-- Top Menu -->
  <v-toolbar dark class="primary">
    <v-toolbar-title>
      <router-link :to="companyVO.link" tag="span" style="cursor:pointer">
        {{ companyVO.title }}
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-for="menuVO in menuVOList" :keys="menuVO.title">
      <v-btn flat router :to="menuVO.link">
        <v-icon left>{{ menuVO.icon }}</v-icon>
        {{ menuVO.title }}
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="onClickedSideIcon" />
  </v-toolbar>

  <!-- Side Menu -->
  <v-navigation-drawer v-model="isShowSideMenu" temporary absolute right>
    <v-list>
      <v-list-tile v-for="menuVO in menuVOList" :keys="menuVO.title" router :to="menuVO.link">
        <v-list-tile-action>
          <v-icon>{{ menuVO.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ menuVO.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <main>
    <notifications position="bottom right" animation-type="velocity" />
    <router-view />
  </main>
</v-app>
</template>

<script src="./app.js" />
<style src="./app.css" />
