<template>
<div>
  <v-alert :type="msgType" v-model="isShow" dismissible class="prompt" transition="slide-y-transition">
    {{ msg }}
  </v-alert>
</div>
</template>

<script src="./message.js" />
<style scoped />
