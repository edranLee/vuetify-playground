<template>
<div>
  <h3>Data Table</h3>
  <v-data-table :headers="headerList" :items="dataList" hide-actions class="elevation-1" pagination.sync="pagination" item-key="UUID" no-data-text="No Result Found.">
    <template slot="items" slot-scope="props">
      <td>{{ props.item.UUID }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.email }}</td>
      <td class="text-xs-right">{{ props.item.age }}</td>
    </template>
  </v-data-table>
</div>
</template>

<script src="./data-table-user.js" />
<style scoped />
