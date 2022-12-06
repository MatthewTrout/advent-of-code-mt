import { readPuzzleDataAsArrayOfLines } from "../../shared/data.js"

const puzzleNamespace = ["2022", "day-2"]

const playType = Object.freeze({
  rock: 'A',
  paper: 'B',
  scissors: 'C'
})

const challengeType = Object.freeze({
  rock: 'X',
  paper: 'Y',
  scissors: 'Z'
})

const challengeValueMap = Object.freeze({
  [challengeType.rock]: 1,
  [challengeType.paper]: 2,
  [challengeType.scissors]: 3,
})

const outcomeValueType = Object.freeze({
  win: 6,
  draw: 3,
  loss: 0,
})


const challengeOutcomeMap = Object.freeze({
  'X': outcomeValueType.loss,
  'Y': outcomeValueType.draw,
  'Z': outcomeValueType.win,
})


const challengeOutcomeValueMap = Object.freeze({
  [playType.rock]: {
    [challengeType.rock]: outcomeValueType.draw,
    [challengeType.paper]: outcomeValueType.win,
    [challengeType.scissors]: outcomeValueType.loss,
  },
  [playType.paper]: {
    [challengeType.rock]: outcomeValueType.loss,
    [challengeType.paper]: outcomeValueType.draw,
    [challengeType.scissors]: outcomeValueType.win,
  },
  [playType.scissors]: {
    [challengeType.rock]: outcomeValueType.win,
    [challengeType.paper]: outcomeValueType.loss,
    [challengeType.scissors]: outcomeValueType.draw,
  },
})


const challengeOutcomeValueMapInverted = Object.freeze({
  [playType.rock]: {
    [outcomeValueType.draw]: challengeType.rock,
    [outcomeValueType.win]: challengeType.paper,
    [outcomeValueType.loss]: challengeType.scissors,
  },
  [playType.paper]: {
    [outcomeValueType.draw]: challengeType.paper,
    [outcomeValueType.win]: challengeType.scissors,
    [outcomeValueType.loss]: challengeType.rock,
  },
  [playType.scissors]: {
    [outcomeValueType.draw]: challengeType.scissors,
    [outcomeValueType.win]: challengeType.rock,
    [outcomeValueType.loss]: challengeType.paper,
  },
})


const calculateMoveScore = (move) => {
  const play = move[0]
  const challenge = move[1]
  const challengeValue = challengeValueMap[challenge]
  const playOutcomeValueMap = challengeOutcomeValueMap[play]
  const challengeOutcomeValue = playOutcomeValueMap[challenge]
  return challengeValue + challengeOutcomeValue
}

const calculateMoveScorePartTwo = (move) => {
  const play = move[0]
  const challenge = move[1]
  const challengeOutcome = challengeOutcomeMap[challenge]
  const playOutcomeValueMapInverted = challengeOutcomeValueMapInverted[play]
  const playOutcomeValueMap = challengeOutcomeValueMap[play]
  const challengeIntention = playOutcomeValueMapInverted[challengeOutcome]
  const challengeOutcomeValue = playOutcomeValueMap[challengeIntention]
  const challengeValue = challengeValueMap[challengeIntention]
  return challengeValue + challengeOutcomeValue
}

const partOne = async () => {
  const puzzleData = await readPuzzleDataAsArrayOfLines(puzzleNamespace)
  const preparedData = puzzleData.map(d => d.split(' '))

  const simulateReduced = preparedData.reduce((acc, curr, idx) => calculateMoveScore(curr) + acc, 0)
 
  return simulateReduced
}

const partTwo = async () => {
  const puzzleData = await readPuzzleDataAsArrayOfLines(puzzleNamespace)
  const preparedData = puzzleData.map(d => d.split(' '))

  const simulateReduced = preparedData.reduce((acc, curr, idx) => calculateMoveScorePartTwo(curr) + acc, 0)
 
  return simulateReduced
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
