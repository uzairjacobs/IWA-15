const data = {
  /*defining object data*/
  lists: [
    /* lists is an array of sub arrays*/
    ["first", [15, 11, 13, 7, 5]] /*contains label and array of numbers*/,
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];
// 3 variables made with the value of the second element (array of numbers)

const result = [];
// will store the extracted numbers

const extractBiggest = () => {
  if (
    first.length > 0 &&
    (second.length === 0 ||
      first[first.length - 1] > second[second.length - 1]) &&
    (third.length === 0 || first[first.length - 1] > third[third.length - 1])
  ) {
    return first.pop();
  }
  /*checks if there are elements in the first array and if either the second array is empty or the last element of first is greater than the last element of second
    same is done with 3rd array
    removes and returns the last element from the first array using the pop method if conditions are met*/

  if (
    second.length > 0 &&
    (third.length === 0 || second[second.length - 1] > third[third.length - 1])
  ) {
    return second.pop();
  }
  /* if the conditions for first are not met, it will check if the second array has elements and if the third array is empty or the last element of second is greater than the last element of third 
   removes and returns the last element from the second array*/

  if (third.length > 0) {
    return third.pop();
  }
  /* if none of the above conditions are met it will check if the third array has elements and if true, it removes and returns the last element from the third array*/
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
