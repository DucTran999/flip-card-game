import { defineStore } from 'pinia'

let matrixSize: number = 2

const useGameModeStore = defineStore('gameMode', {
  state: () => {
    return { matrixSize }
  },

  actions: {
    update(newSize: number) {
      this.matrixSize = newSize
    }
  }
})

export default useGameModeStore
