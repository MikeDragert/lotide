// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  } else {
    return array.slice(1);
  }
};

// TEST CODE
//test case 1 - number array
let arr = [5,6,7];
let tailArr = tail(arr);
assertEqual(arr.length,3);
assertEqual(tailArr.length,2);
assertEqual(arr[0],5);
assertEqual(arr[1], tailArr[0]);
assertEqual(arr[2], tailArr[1]);
//test case 2 - 1 element array
arr = [1];
tailArr = tail(arr);
assertEqual(tailArr.length, 0);

//test case 3 - empty array
arr = [];
tailArr = tail(arr);
assertEqual(tailArr.length, 0);

//test case 4 - string array
arr = ["Hello", "Lighthouse", "Labs"];
tailArr = tail(arr);
assertEqual(arr.length,3);
assertEqual(tailArr.length,2);
assertEqual(arr[0],"Hello");
assertEqual(arr[1], tailArr[0]);
assertEqual(arr[2], tailArr[1]);