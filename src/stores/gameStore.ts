import { defineStore } from 'pinia'

let matrixSize: number = 0
let matrix: Array<number> = []

const useGameModeStore = defineStore('gameMode', {
  state: () => {
    return { matrixSize, matrix }
  },

  actions: {
    update(newSize: number) {
      this.matrixSize = newSize
    },
    updateMatrix(matrix: Array<number>) {
      this.matrix = matrix
    }
  }
})

export default useGameModeStore
