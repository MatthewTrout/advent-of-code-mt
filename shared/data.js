import { promises } from 'fs'
import * as path from 'path'

const { readFile } = promises

const puzzleDataFilename = 'data.txt'

const getRootDirectory = () => '/home/matthew/MT/advent-of-code-mt/' // @todo: until we have a proper infrastructure in place for puzzle loading

export const readPuzzleDataAsArrayOfLines = async (puzzleNamespace) => {
  const localPuzzleDirectory = path.join.apply(null, puzzleNamespace)
  const data = await readFile(path.join(getRootDirectory(), localPuzzleDirectory, puzzleDataFilename))
  const array = data.toString().replace(/\r\n/g, '\n').split('\n')
  if (String(array[array.length - 1]).trim() === '') {
    array.pop()
  }
  return array
}

export const readPuzzleAsArrayOfLinesOfStrings = async (puzzleNamespace) => await readPuzzleDataAsArrayOfLines(puzzleNamespace)
export const readPuzzleAsArrayOfLinesOfIntegers = async (puzzleNamespace) => {
  const array = await readPuzzleDataAsArrayOfLines(puzzleNamespace)
  return array.map(s => parseInt(s))
}

export const readPuzzleAsArrayOfLinesOfArrayOfCharacters = async (puzzleNamespace) => await readPuzzleDataAsArrayOfLines(puzzleNamespace).then(a => a.map(s => s.split('')))
export const readPuzzleAsArrayOfLinesOfArrayOfIntegers = async (puzzleNamespace) => await readPuzzleDataAsArrayOfLines(puzzleNamespace).then(a => a.map(s => s.split('').map(s => parseInt(s))))
