import { readPuzzleAsArrayOfLinesOfIntegers } from "../../shared/data.js";

const puzzleNamespace = ["2022", "day-1"];

const partOne = async () => {
  const puzzleData = await readPuzzleAsArrayOfLinesOfIntegers(puzzleNamespace);

  const splitByNaN = puzzleData.join(",").split("NaN,");
  const elfInventories = splitByNaN.map((item) =>
    item
      .split(",")
      .filter((v) => v)
      .map((value) => parseInt(value, 10))
  );

  const reduced = elfInventories.reduce((acc, inventory) => {
    const sum = inventory.reduce((acc, curr) => acc + curr, 0);
    if(sum > acc) {
      return sum;
    }
    return acc;
  }, 0);

  return reduced;
};

const partTwo = async () => {
  const puzzleData = await readPuzzleAsArrayOfLinesOfIntegers(puzzleNamespace);
  debugger;

  const splitByNaN = puzzleData.join(",").split("NaN,");
  const elfInventories = splitByNaN.map((item) =>
    item
      .split(",")
      .filter((v) => v)
      .map((value) => parseInt(value, 10))
  );
  debugger;

  const topThreeCalories = elfInventories.reduce((topThree, inventory) => {
    const sum = inventory.reduce((acc, curr) => acc + curr, 0)
    const bucket = [...topThree, sum]
    const sorted = bucket.sort()
    const [,third,second,first] = sorted
    return [first,second,third]
  }, [0,0,0])
  debugger


  const sumOfTopThree = topThreeCalories.reduce((acc, curr) => acc + curr, 0)

  debugger
  return sumOfTopThree
};

const puzzle = async () => {
  const partOneResult = await partOne();
  debugger;
  const partTwoResult = await partTwo();
  debugger;
};

export default puzzle;

// @todo until we have a running infrastructure in..
await puzzle();
