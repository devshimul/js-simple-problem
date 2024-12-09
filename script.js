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
*/
/**
 * Per chair wood needed = 3cft
 * Per table wood needed = 10ctf
 * Per bed wood needed = 50cft
 */

function woodNeeded(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return totalWood;
}

const totalWood = woodNeeded(4, 0, 1);
console.log(`${totalWood} CFT wood needed for making your furniture`);

const prices = [10000, 20000, 34000, 100000, 5700, 9000, 9840];

function getMin(prices) {
  let min = prices[0];
  for (const price of prices) {
    if (price < min) {
      min = price;
    }
  }
  return min;
}
const minPrice = getMin(prices);
console.log(minPrice);

const phones = [
  {
    name: "Apple",
    price: 140000,
    model: "15 Pro Max",
    varient: "usa",
    warrenty: "1 year",
  },
  {
    name: "Oppo",
    price: 41000,
    model: "Reno 10",
    varient: "India",
    warrenty: "1 year",
  },
  {
    name: "Vivo",
    price: 27000,
    model: "Y27",
    varient: "India",
    warrenty: "1 year",
  },
  {
    name: "xoami",
    price: 33000,
    model: "Redmi note 12",
    varient: "India",
    warrenty: "1 year",
  },
  {
    name: "Google",
    price: 530000,
    model: "Pixel 7 pro",
    varient: "usa",
    warrenty: "1 year",
  },
  {
    name: "Samsung",
    price: 77000,
    model: "S22 Ultra",
    varient: "Japan",
    warrenty: "1 year",
  },
];

function lowestPricePhone(phones) {
  let minPrice = phones[0];
  for (const phone of phones) {
    if (phone.price < minPrice.price) {
      minPrice = phone;
    }
  }
  return minPrice;
}
const lowPricePhone = lowestPricePhone(phones);
console.log(lowPricePhone);

const shoping = [
  { name: "Pant", price: 400, quantity: 3 },
  { name: "shirt", price: 350, quantity: 5 },
  { name: "Sunglass", price: 200, quantity: 1 },
  { name: "Shoe", price: 1700, quantity: 2 },
];

function getTotalPrice(products) {
  let sum = 0;
  for (const product of products) {
    let singlePrice = product.price * product.quantity;
    sum += singlePrice;
  }
  return sum;
}
const productsTotalPrice = getTotalPrice(shoping);
console.log(productsTotalPrice);
