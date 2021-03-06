import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)

// createApp(App).use(router).mount('#app')
app.use(router).mount('#app')
