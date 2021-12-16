import { readPuzzleAsArrayOfLinesOfIntegers } from '../../shared/data.js'

const puzzleNamespace = ['2021', 'day-1']

const partOne = async () => {
  const puzzleData = await readPuzzleAsArrayOfLinesOfIntegers(puzzleNamespace)
  debugger
  const [, increaseCount] = puzzleData.reduce(
    (acc, curr, idx, arr) => [curr, curr > acc[0] ? acc[1] + 1 : acc[1]],
    [puzzleData[0], 0])
  return increaseCount
}

const partTwo = async () => {
  const puzzleData = await readPuzzleAsArrayOfLinesOfIntegers(puzzleNamespace)
  debugger
  const [, increaseCount] = puzzleData.reduce(
    (acc, curr, idx, arr) => {
      if (idx < 2) {
        return acc
      }
      const currentSlidingWindow = [curr, arr[idx - 1], arr[idx - 2]]
      const currentSlidingWindowSum = currentSlidingWindow.reduce((acc, curr) => acc + curr, 0)
      return [currentSlidingWindowSum, currentSlidingWindowSum > acc[0] ? acc[1] + 1 : acc[1]]
    },
    [, 0])
  return increaseCount
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
