// function LCM(arr, n) {
//    let max_num = Math.max(...arr);
//    let res = 1;
//    let x = 2;
//    let count = 0;
//    while (x <= max_num) {
//       let indexes = [];
//       for (let i in arr) {
//          if (arr[i] % x == 0)
//             indexes.push(i)
//       }
//       if (indexes.length >= 2) {
//          count += 1;
//          for (let i = 0; i < indexes.length; i++) {
//             arr[indexes[i]] = arr[indexes[i]] / x;
//          }
//          console.log(arr);
//          res = res * x;
//       } else {
//          x++;
//       }
//    }
//    for (let values of arr) {
//       res = res * values
//    }
//    console.log(res);
//    console.log(count);

// }
// let arr = [1, 2, 3, 4, 5]
// var n = arr.length;
// LCM(arr, n)

// let n = 0
// console.log(++n);
// console.log(n++);
// console.log(n);


// let a = 5;
// let b = "10";
// let c = a + b
// console.log(c);


// let a = {};

// let b = { name: "Ahmed" }
// let c = { name: "Sokar" }

// a[b] = { ...b, age: 25 }
// a[c] = { ...c, age: 30 }
// console.log(a);

// const a = { b: { c: 5 }, d: 10 }
// Object.freeze(a)
// let shape = a;
// console.log(shape);
// shape.b = 100;
// shape.d = 150;
// shape.b.c = 200;
// console.log(shape);

// function compareMembers(p, per = p) {
//    if (per !== p) {
//       console.log("Not same");
//    } else {
//       console.log("Same");
//    }
//    console.log(per);
// }

// const p = { name: "Ahmed" }
// compareMembers(p)


// let a = 1;
// let x = (a++, 10);


// console.log(a);
// console.log(x);

// (function () {
//    console.log("1");
//    setTimeout(() => {
//       console.log("2");
//    }, 1000);
//    setTimeout(() => {
//       console.log("3");
//    }, 0);
//    setTimeout(() => {
//       console.log("4");
//    }, -1000);
// }

// )();

// var isPalindrome = function (s) {
//     if (s == '') {
//         return true;
//     } else {
//         let a = s.toLowerCase();
//         let validA = ""
//         for (let i in a) {
//             if (a.charCodeAt(i) >= 97 && a.charCodeAt(i) <= 122 || a.charCodeAt(i) >= 48 && a.charCodeAt(i) <= 57) {
//                 validA += a[i];
//             }
//         }
//         var reverseA = validA.split('').reverse().join('');
//         if (validA === reverseA)
//             return true;
//         else
//             return false;
//     }
// };
// let a = "A man, a plan, a canal: Panama"
// isPalindrome(a);
// console.log(isPalindrome(a));


// function reverseArr(s) {
//     return s.split("").reverse().map(Number);
// }
// var addBinary = function (a, b) {
//     let arrA = reverseArr(a);
//     let arrB = reverseArr(b);
//     console.log(arrA, arrB)
//     let rem = 0;
//     let res = "";
//     let max_len = Math.max(arrA.length, arrB.length)
//     console.log(max_len);
//     for (let i = 0; i < max_len; i++) {
//         if (arrA[i] == 0 && arrB[i]==0){
//             let mid = rem + 0 ;
//             res += mid;
//             rem = 0;
//         } else if (arrA[i] == 1 && arrB[i]==0 || arrA[i] == 0 && arrB[i]==1){
//             if (rem == 1){
//                 res = res + 0;
//                 rem = 1;
//             } else {
//                 res = res + 1;
//                 rem = 0;
//             }
//         } else {

//         }
//     }
// };

// var addBinary = function (a, b) {
//     let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
//     return sum.toString(2);
// };

// let a = "1011", b = "10"
// // console.log(addBinary(a, b));
// addBinary(a, b);

