<template>
<div>
  <h3>Grid Layout</h3>
  <v-layout row wrap text-xs-center>
    <v-flex xs12>
      <v-card dark color="primary">
        <v-card-text>12</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs6 v-for="i in 2" :key="`6${i}`">
      <v-card dark color="secondary">
        <v-card-text>6</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs4 v-for="i in 3" :key="`4${i}`">
      <v-card dark color="primary">
        <v-card-text>4</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs3 v-for="i in 4" :key="`3${i}`">
      <v-card dark color="secondary">
        <v-card-text>3</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs2 v-for="i in 6" :key="`2${i}`">
      <v-card dark color="primary">
        <v-card-text>2</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs1 v-for="i in 12" :key="`1${i}`">
      <v-card dark color="secondary">
        <v-card-text>1</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script />
<style scoped />
