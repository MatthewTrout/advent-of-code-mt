import { readPuzzleAsArrayOfLinesOfStrings } from '../../shared/data.js'

const puzzleNamespace = ['2021', 'day-2']

const submarineActionType = Object.freeze({
  forward: 'forward',
  up: 'up',
  down: 'down'
})
const mapSubmarineInstruction = (instruction) => instruction
  .split(' ')
  .map((p, idx) => idx === 0 ? ({ action: p }) : ({ value: parseInt(p) }))
  .reduce((acc, curr) => ({ ...acc, ...curr }), {})

const reduceInstructionsBasic = ({ depth, horizontal }, { action, value }) => ({
    depth,
    horizontal,
    ...(action === submarineActionType.up ? {
      depth: depth -= value,
    } : {}),
    ...(action === submarineActionType.down ? {
      depth: depth += value,
    } : {}),
    ...(action === submarineActionType.forward ? {
      horizontal: horizontal += value,
    } : {})
  }
)

const reduceInstructions = ({ depth, horizontal, aim }, { action, value }) => ({
    depth,
    horizontal,
    aim,
    ...(action === submarineActionType.up ? {
      aim: aim -= value,
    } : {}),
    ...(action === submarineActionType.down ? {
      aim: aim += value
    } : {}),
    ...(action === submarineActionType.forward ? {
      horizontal: horizontal += value,
      depth: depth += (aim * value)
    } : {})
  }
)

const partOne = async () => {
  const puzzleData = await readPuzzleAsArrayOfLinesOfStrings(puzzleNamespace)
  const instructions = puzzleData.map(mapSubmarineInstruction)
  const finalPosition = instructions.reduce(reduceInstructionsBasic, { depth: 0, horizontal: 0 })
  const result = finalPosition.depth * finalPosition.horizontal
  return result
}

const partTwo = async () => {
  const puzzleData = await readPuzzleAsArrayOfLinesOfStrings(puzzleNamespace)
  const instructions = puzzleData.map(mapSubmarineInstruction)
  const finalPosition = instructions.reduce(reduceInstructions, { depth: 0, horizontal: 0, aim: 0 })
  const result = finalPosition.depth * finalPosition.horizontal
  return result
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
