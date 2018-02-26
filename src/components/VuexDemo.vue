<template>
  <div id="app">
    <h2>array</h2>
    <span @click="this.greaterThan5">大于5</span>
    <span @click="this.greaterThan7">大于7</span>
    <p v-for="(item,index) in $store.state.array.array" :key="index">{{item}}</p>
    <hr>
    <h2>string</h2>
    <span @click="this.changeLocaleLower">小写切换</span>
    <span @click="this.changeUpper">大写切换</span>
    <p style="color:red">{{$store.state.string.string}}</p>
    <hr>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'greaterThan5',
        'greaterThan7',
        'toUpperCase',
        'toLocaleLowerCase'
      ]),
      changeLocaleLower(){
        this.toLocaleLowerCase()
      },
      changeUpper(){
        this.toUpperCase();
      }
    },
    created() {
      this.toUpperCase()
    }
  }
</script>