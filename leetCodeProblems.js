// var merge = function (nums1, m, nums2, n) {
//     nums1.splice(m, n)
//     console.log(nums1);
//     nums1.push(...nums2);
//     nums1.sort((a, b) => a - b)
//     console.log(nums1);
// };

// let m = 3, n = 3
// let nums1 = [1, 2, 3, 0, 0, 0], nums2 = [2, 5, 6]

// merge(nums1, m, nums2, n);


// let pascaltri = (numRows) => {
//     let arr = [];
//     for (let i = 0; i < numRows; i++) {
//         let e = [];
//         for (let j = 0; j <= i; j++) {
//             if (i == j) {
//                 e.push(1);
//             } else {
//                 e.push(j == 0 ? arr[i - 1][j] : arr[i - 1][j - 1] + arr[i - 1][j])
//             }
//         }
//         arr.push(e)
//     }
//     return arr;
// }



// let numRows = 10;

// pascaltri(numRows)



// let findWords = (words) => {

//     function isOneRow(word) {
//         let rows = {
//             'q': 1, 'w': 1, 'e': 1, 'r': 1, 't': 1, 'y': 1, 'u': 1, 'i': 1, 'o': 1, 'p': 1,
//             'a': 2, 's': 2, 'd': 2, 'f': 2, 'g': 2, 'h': 2, 'j': 2, 'k': 2, 'l': 2,
//             'z': 3, 'x': 3, 'c': 3, 'v': 3, 'b': 3, 'n': 3, 'm': 3
//         }
//         if (word.length < 2) {
//             return true;
//         } else {
//             word = word.toLowerCase();
//             let row = rows[word[0]]
//             return word.split('').every(e => rows[e] === row)
//         }
//     }
//     return words.filter(isOneRow)
// }



// let arr = ["Hello", "Alaska", "Dad", "Peace"];
// console.log(findWords(arr));




// let pascalTraingle = (l) => {
//     let numArr = [];
//     for (let i = 0; i <= l; i++) {
//         let err = [];
//         for (let j = 0; j <= i; j++) {
//             if (i == j) {
//                 err.push(1)
//             } else {
//                 err.push(j == 0 ? numArr[i - 1][j] : numArr[i - 1][j] + numArr[i - 1][j - 1])
//             }
//         }
//         numArr.push(err)
//     }
//     return numArr;
// }

// let rowLength = 5;


// console.log(pascalTraingle(rowLength));


// function isBalancedexpr(expr) {
//     let stack = []
//     for (let i = 0; i < expr.length; i++) {
//         let x = expr[i]
//         if (x == '(' || x == '{' || x == '[') {
//             stack.push(x);
//             continue
//         }
//         if (stack.length == 0) {
//             return false;
//         }
//         let check;
//         switch (x) {
//             case ")":
//                 check = stack.pop()
//                 if (check == '{' || check == '[')
//                     return false;
//                 break;
//             case '}':
//                 check = stack.pop()
//                 if (check == '(' || check == '[')
//                     return false;
//                 break;
//             case ']':
//                 check = stack.pop();
//                 if (check == '(' || check == '{')
//                     return false;
//                 break;
//         }
//     }
//     if (stack.length == 0) {
//         return true
//     }
//     else {
//         return false
//     }

// }


// let expr = '{}[]({[]})'
// if (isBalancedexpr(expr))
//     console.log("Balanced expression");
// else
//     console.log("Not balanced");



// let remove = (nums) => {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
//             continue;
//         } else {
//             nums[count] = nums[i];
//             count++;
//         }
//     }
//     console.log(count);
// }

// let nums = [1, 1, 1, 1, 1]

// remove(nums)



// function vowelSub(inp) {
//     function isVowel(x) {
//         if (x == 'a') return true;
//         if (x == 'e') return true;
//         if (x == 'i') return true;
//         if (x == 'o') return true;
//         if (x == 'u') return true;
//     }
//     let x = inp.length;
//     let y = inp[0].length;
//     for (let i = 0; i <= x - 2; i++) {
//         for (let j = i; j <= y - 2; j++) {

//             if (isVowel(inp[i][j]) && isVowel(inp[i][j + 1]) && isVowel(inp[i + 1][j]) && isVowel(inp[i + 1][j + 1])) {
//                 console.log(i, j);
//                 break
//             }
//         }
//     }

// }

// let inp = ["aqrst", "ukaei", "ffooo"];
// vowelSub(inp);
// 