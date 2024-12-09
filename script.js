// const marks = [14, 56, 98, 48, 51, 25, 364, 14];
// function arrMultiply(numbers) {
//   for (const mark of numbers) {
//     if (mark % 2 === 0) {
//     }
//   }
// }
// const mulResult = arrMultiply(marks);
/*
const numbers = [14, 58, 45, 87, 96, 78, 47, 12, 98, 75, 15, 78, 96, 36];
function evenNums(nums) {
  const newArr = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  }
  let sum = 0;
  for (const even of newArr) {
    sum += even;
  }
  return sum;
}
const newNums = evenNums(numbers);
console.log(newNums);
*/
const numbers = [14, 58, 45, 87, 96, 78, 47, 12, 98, 75, 15, 78, 96, 36, 166];
function tallestNum(numbers) {
  let large = numbers[0];
  for (const num of numbers) {
    if (num > large) {
      large = num;
    }
  }
  return large;
}
const largeNum = tallestNum(numbers);
console.log(largeNum);
