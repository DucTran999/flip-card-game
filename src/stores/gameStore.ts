import { defineStore } from 'pinia'

interface Match {
  matrixSize: number
  matrix: number[]
  turn: number
  result: boolean
}

const useGameModeStore = defineStore('gameMode', {
  state: () => {
    const match: Match = {
      matrixSize: 0,
      matrix: [],
      turn: 0,
      result: false
    }
    return { match }
  },
  actions: {
    createMatch(newSize: number, matrixShuffled: number[], totalTurns: number, timeLimit: number) {
      this.match.matrix = matrixShuffled
      this.match.matrixSize = newSize
      this.match.turn = totalTurns
      this.match.result = false
    },
    decreaseTurn() {
      this.match.turn--
    },
    updateResult(res: boolean) {
      this.match.result = res
    }
  }
})

export default useGameModeStore
