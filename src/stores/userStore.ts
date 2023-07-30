import { defineStore } from 'pinia'

let username: String = ''

const useUserStore = defineStore('users', {
  state: () => {
    return { username }
  },

  actions: {
    update(name: String) {
      this.username = name
    }
  }
})

export default useUserStore
