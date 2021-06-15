import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import './assets/tailwind.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAZY22wd4QnXBXldWjLJTUoMu24LRct9xo",
  authDomain: "valhalla-a358f.firebaseapp.com",
  projectId: "valhalla-a358f",
  storageBucket: "valhalla-a358f.appspot.com",
  messagingSenderId: "455822441352",
  appId: "1:455822441352:web:c27a756e1bf73310bc183d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(){
  new Vue({
    router,
    store,
    render: function (h) { return h(App) }
  }).$mount('#app')
})