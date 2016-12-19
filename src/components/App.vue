<template>
  <div class="app-viewport" id="">
    <md-sidenav class="md-left md-fixed" ref="sidebar">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <md-avatar class="md-large">
              <img src="https://placeimg.com/64/64/people/8" alt="People">
            </md-avatar>
    
            <span style="flex: 1"></span>
          </md-list-item>
    
          <md-list-item>
            <div class="md-list-text-container">
              <span>RRRR</span>
              <span>RRR@gmail.com</span>
            </div>

          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>
        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <router-link to="/home">
              <md-icon>home</md-icon> <span>Home</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <md-whiteframe md-elevation="3">
      <md-toolbar>
        <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
        <md-icon>menu</md-icon>
        </md-button>

          <h2 class="md-title" style="flex: 1">LK Reader</h2>
      
        <md-button class="md-icon-button">
           <router-link to="/home">
            <md-icon>home</md-icon>
           </router-link>
        </md-button>
      </md-toolbar>
    </md-whiteframe>

    <div class="main-container">
      <router-view></router-view>
    </div>


  </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>
    .app-viewport {
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-flow: column;
    }
    
    .main-container {
        overflow: auto;
    }
</style>