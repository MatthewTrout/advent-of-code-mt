import { readPuzzleAsArrayOfLinesOfArrayOfIntegers } from '../../shared/data.js'

const puzzleNamespace = ['2021', 'day-3']

// Count the ones in each position (reduce),
// each position becomes 1 if the count is greater than half the list length otherwise zero...
const partOne = async () => {
  const puzzleData = await readPuzzleAsArrayOfLinesOfArrayOfIntegers(puzzleNamespace)
  const bitLength = puzzleData[0].length
  const positiveCounts = puzzleData.reduce((acc, curr) => {
    return acc.map((positiveCount, bitIdx) => {
      return positiveCount + curr[bitIdx]
    })
  }, new Array(bitLength).fill(0))
  const splitCount = Math.floor(puzzleData.length / 2)
  const positiveMask = positiveCounts.map(c => c > splitCount ? 1 : 0)
  const negativeMask = positiveMask.map(c => c ? 0 : 1)

  const gammaRate =  parseInt(positiveMask.join(''), 2)
  const epsilonRate = parseInt(negativeMask.join(''), 2)
  const powerConsumption = gammaRate * epsilonRate
  return powerConsumption
}

const partTwo = async () => {

}

const puzzle = async () => {
  const partOneResult = await partOne()
  debugger
  const partTwoResult = await partTwo()
  debugger
}

export default puzzle

// @todo until we have a running infrastructure in..
await puzzle()
