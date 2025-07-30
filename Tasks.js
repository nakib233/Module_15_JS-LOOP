// Break related problem
// Write a loop 1 to 200. Use break to exit the loop once you find 100.

// let start = 1;
// while (start <= 200) {
//   console.log(start);
//   if (start === 100) {
//     break;
//   }
//   start++;
// }

// Sum related

// for (start; start <= 100; start++) {
//   sum = sum + start;
//   if (sum === 100) {
//     break;
//   }
// }
// console.log("the summation is here: ", sum);
// let start = 0;
// let sum = 0;

// while (start <= 100) {
//   sum = sum + start;
//   if (sum >= 100) {
//     break;
//   }
//   start += 5;
// }
// console.log("the summation is here: ", sum);

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

// let start = 1;
// while (start <= 100) {
//   console.log(start);
//   if (start === 4) {
//     break;
//   }
//   start++;
// }
// console.log(start);

// Continue part

// Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

let num = 1;
while (num <= 40) {
  num++;
  if (num % 2 != 0) {
    continue;
  }
  console.log("The Ever Numbers are: ", num);
}

// // display odd number from 55 to 85 and skip the numbers divisible by 5.
let number = 55;
while (number <= 85) {
  number++;
  if (number % 5 === 0) {
    continue;
  }
  console.log("The expected outputs are: ", number - 1);
}
