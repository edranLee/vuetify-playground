<template>
<div>
  <!-- <common-message msg="This is info message." msgType="info" :isShow='isShowInfoMsg'></common-message>
  <common-message msg="This is success message" msgType="success" :isShow='isShowSuccessMsg'></common-message>
  <common-message msg="This is warning message" msgType="warning" :isShow='isShowWarningMsg'></common-message>
  <common-message msg="This is error message" msgType="error" :isShow='isShowErrorMsg'></common-message> -->

  <h3>System Color</h3>
  <v-layout row wrap text-xs-center>
    <v-flex xs12 sm12 md1>
      <v-card dark color="primary">
        <v-card-text>Primary</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm12 md1>
      <v-card dark color="secondary">
        <v-card-text>Secondary</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm12 md1>
      <v-card dark color="accent">
        <v-card-text>Accent</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12 sm2 md1>
      <v-btn color="info" @click="onClickedInfoBtn">Info</v-btn>
    </v-flex>
    <v-flex xs12 sm2 md1>
      <v-btn color="success" @click="onClickedSuccessBtn">Success</v-btn>
    </v-flex>
    <v-flex xs12 sm2 md1>
      <v-btn color="warning" @click="onClickedWarningBtn">Warn</v-btn>
    </v-flex>
    <v-flex xs12 sm2 md1>
      <v-btn color="error" @click="onClickedErrorBtn">Error</v-btn>
    </v-flex>
  </v-layout>
</div>
</template>

<script src="./system-color.js" />
<style scoped />
