
const input1= [1, 2, 4, 0];
const input2= ('w3resource');

console.log(Array.isArray(input1));
console.log(Array.isArray(input2));


var array_Clone = function(arra1) {
    return arra1.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));



function firstElements(arr, n) {
  let resultArr = [];

  for (let i = 0; i < n; i++) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}

const number = [7, 9, 0, -2];


console.log(firstElements(numbers, 1)); // [15, 25, 30]


function lastElements(arr, n) { 
  if (n == null) 
    return arr.pop();
  else { 
    return arr.splice(arr.length - n, n);
  } 
} 

// Example 
console.log(lastElements([7, 9, 0, -2], 3)); 
console.log(lastElements([7, 9, 0, -2], 4))
console.log(lastElements([7, 9, 0, 2], 1))
// Output: [3, 4]




myColor = ["Red", "Green", "White", "Black",];


myColor =["Red", "Green", "White", "Black",];

console.log(myColor.join());



function evenDashed(num) {
  const arr = [...num.toString()];
  const result = [];

  arr.forEach((item, index) => {
    if (index % 2 === 0) {
      result.push(Number(item));
    } else if (item % 2 === 0) {
      result.push(`${item}-`);
    } else {
      result.push(Number(item));
    }
  });

  return result.join('');
}

console.log(evenDashed(025468));   // 0-254-6-8




Solution

const sortArray = (arr) => 
arr.sort((a, b) => a - b);

console.log(sortArray([-3, 8, 7, 6, 5, -4, 3, 2, 1 ])); // [1, 2, 4, 5, 8]



let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let mf = 1;
let m = 0;
let item;

for (let i=0; i <arr.length; i++)
{
        for (let j=i; j < arr.length; j++)
{
        if (arr[i] == arr[j])
m++;
        if (mf < m)
{
mf = m;
item = arr[i];
}
}
m=0;
}

console.log(`${item} ( ${mf} 5times )`) ;



function swapCase(str) { 
  let swappedStr = '';

  for (let i = 0; i < str.length; i++) { 
    if (str[i] === str[i].toUpperCase()) { 
      swappedStr += str[i].toLowerCase(); 
    } else if (str[i] === str[i].toLowerCase()) { 
      swappedStr += str[i].toUpperCase(); 
    }
  } 
  return swappedStr; 
} 

console.log(swapCase('The Quick Brown Fox')); // tHE qUICK bROWN fOX



var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < a[i].length; j++) {
    console.log(a[i][j]);
  }
}



//Declare a vector 
var nums = [1, 2, 3];

//Use reduce() method to find sum of squares
var sumOfSquares = nums.reduce((total, num) => total + Math.pow(num, 2), 0);

//Print the result 
console.log(sumOfSquares); // Output: 14



// Using a for loop 

let numbers = [2, 3, 4, 5, 6];
let sum = 0;
let product = 1;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
}

console.log(sum); // Output: 20
console.log(product); // Output: 720



// Creating a blank array 
let array1 = [];



function removeDuplicates(array) {
  let cleanedArray = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i].toLowerCase();
    if (cleanedArray.indexOf(item) === -1) {
      cleanedArray.push(item);
    }
  }
  return cleanedArray;
}

let cities = ["New York", "Paris", "New York", "Moscow", "Rome"];
let uniqueCities = removeDuplicates(cities);
console.log(uniqueCities); // Output: ["new york", "paris", "moscow", "rome"]


Colors = ("Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ");

console.log("Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ");

// Function to add elements to the array
function addElement(value) 
{ 
    // Pushing the given value to the array
    array1.push(value)
    // Printing the content of the array
    console.log(`Added element : ${value} is ${array1}`);
} 

// Calling the addElement() function 
addElement(10); 
addElement(20); 
addElement(30);


function leapyearRange(start_year, end_year) { 
	 
	console.log("The leap years within the provided range are : "); 
	
	// Iterate from start_year to end_year 
	for (var year = start_year; year <= end_year; year++) { 
				
		// Check year is divisible by 4 
		if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) { 
			console.log(year); 
		} 
	} 
} 
	
// Driver code 
start_year = 2000; 
end_year = 2020; 
leapyearRange(start_year, end_year);


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffleArray(newArray);

console.log(newArray);



// Function to perform Binary Search 
function binary_Search(items, value){ 
    first = 0; 
    last = items.length - 1; 
    found = false;
  
    while (first <= last && !found) {  
         mid = Math.floor((first + last) / 2);
         if (items[mid] == value) 
           found = true;
         else if (items[mid] < value)
              first = mid + 1; 
         else
              last = mid - 1; 
    }
 
    return (found) ? mid : -1; 
} 

// Example array with values 
var items = [1, 2, 3, 4, 5, 7, 8, 9, 10]; 
// Specify the value to search 
var value = 5;

// Call the function 
result = binary_Search(items, value);

// Print the result 
(result == -1)
  ? console.log("Value is not found!")
  : console.log("Value is found at index " + result);

  
//Example:

Array1 = [1,0,2,3,4];
Array2 = [3,5,6,7,8,13];

Solution:
//Calculate the sum of the individual index value of the two arrays

var sum = 0;

for(i=0; i<Array1.length; i++){
  sum += Array1[i] + Array2[i];
}

console.log(sum); //Output: 28





function findDuplicates(array){
  var res = [];
  for(var i=0 ; i < array.length;i++){ 
    for(var j=i+1; j < array.length; j++){
      if(array[i] == array[j]){
        res.push(array[i])
      }
    }
  }
  return res;
}

var array = [1,2,3,4,4,5,7,2];
console.log(findDuplicates(array)); //output: [4, 2]



function flattenArray(arr, shallow = false) {
	return arr.reduce(
		(flatArr, elem) =>
			flatArr.concat(
				Array.isArray(elem)
					? (shallow ? elem : flattenArray(elem))
					: elem
			),
		[]
	);
}

let arr = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(arr));
console.log(flattenArray(arr, true));



const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(union([1, 2, 3], [10, 2, 1, 100]));



function arrayDifference(arr1, arr2) {
  var result = [];
  for (var i=0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (var j=0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) {
      result.push(arr2[j]);
    }
  }
  return result;
}



var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
    if ((typeof arr[i] == "number") && !isNaN(arr[i])) {
        newArr.push(arr[i]);
    }
}

console.log(newArr); // [15, -22, 47]




const products = [ 
   {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
   {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
   {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
];

function sortByTitle(products) {
  products.sort(function(a, b) {
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  return products;
}

console.log(sortByTitle(products));



const findPair = (arr, target) => {
    let result;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result = [i, j];
            }
        }
    }
    return result;
};
 
// Sample array
const arr = [10,20,10,40,50,60,70];
 
// Sample target number
const target = 50;
 
console.log(findPair(arr, target)); // [0, 1]





function getPropertyValue(arr,property){
  var result = [];
  for (var i=0; i < arr.length; i++) {
    result.push(arr[i][property]);
  }
  return result;
}
console.log(getPropertyValue([NaN, 0, 15, false, -22, '',undefined, 47, null],'length')); // Output : [NaN, 1, 2, 5, 3, 0, undefined, 2, 0]
  




function longest_common_starting_substring(arr){
 let result = "";
  let minLength= Math.min(...arr.map(str => str.length ));
  for(let i=0;i<minLength;i++){
    let char = arr[0].charAt(i);
    if(arr.every(str => str.charAt(i) == char))
     result += char;
    else break;
  }
  return result;
}

console.log(longest_common_starting_substring(['go', 'google']));






function num_string_range(str1, str2, n) {
    const range = [];
    for (let i = str1.charCodeAt(0); i <= str2.charCodeAt(0); i++) {
      range.push(String.fromCharCode(i).repeat(n));
    }
    return range;
  }
  
  console.log(num_string_range('a', "z", 2)); // ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 'vv', 'ww', 'xx', 'yy', 'zz']



  


function mergeArrays(array1, array2) {

    // Merge two arrays 
    let mergedArray = array1.concat(array2); 
    
    // Iterate merged array 
    for (let i = 0; i < mergedArray.length; i++) {
      for (let j = i + 1; j < mergedArray.length; j++) {
        
        // Check if elements match 
        if (mergedArray[i] === mergedArray[j]) {
          
          // Remove duplicate element 
          mergedArray.splice(j, 1);
          j--;
        }
      }
    }
    return mergedArray;
  }
  
  console.log(mergeArrays([1, 2, 3], [2, 30, 1]));


  
var myArray =[2, 5, 9, 6, 5];

// function to remove element from array
function removeElement(array, value){
    return array.filter(function(element){
        return element != value;
    });
}

// pass array and value to be removed
console.log(removeElement(myArray, 5, 5)); // [1,2,4,5]
// console.log(remove_array_element([2, 5, 9, 6], 5));





//function
function findElement(arr, element) {
    return arr.indexOf(element) !== -1;
}

//invoking 
console.log(findElement(arr, 9))
//output: true




// Method 1
var array = [1, 2, 3, 4, 5]; 
   
array.fill(null); 
 
console.log(array); 

// Method 2
var array = [1, 2, 3, 4, 5]; 

for (let i = 0; i < array.length; i++) 
    array[i] = null; 

console.log(array);



function findElement(arr, n) {
    arr.sort(function(a, b) {
      return b - a;
    });
    return arr[n - 1];
  }
  
  console.log(findElement([43, 56, 23, 89, 88, 90, 99, 652], 4)); // 8




function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  let arr = [0];
  let randomItem = getRandomItem(arr);
  console.log(randomItem); // Outputs a random item from the array


  
  function createElements(n, val) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = val;
    }
    return arr;
}

console.log(createElements(6, 0)); // [0, 0, 0, 0, 0]



function arrayFill(num, str) {
    let array = [];
    for (let i=0; i < num; i++) {
      array.push(str);
    }
    return array;
  }
  
  console.log(arrayFill(3, 'default value')); // ['hello', 'hello', 'hello']


  
function moveElement(arr,oldIndex,newIndex)
{ 
    var item = arr.splice(oldIndex, 1)[0];
    arr.splice(newIndex, 0, item);
    return arr;
}

console.log(moveElement([10, 20, 30, 40, 50], 0, 2)); // [3, 4, 5, 2]



function filterFalseValues(arr) {
    return arr.filter(Boolean);
  }
  
  console.log(filterFalseValues([58, '', 'abcd', true, null, false, 0])); // [ 7, 9, 'hello' ]


  
function generateArray(len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
       arr.push(i + 1, 2, 3, 4);
    }
    return arr;
 }
 
 console.log(generateArray(1, 4)); // Output: [1, 2, 3, 4, 5]

 
function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }
  
  console.log(range(4, 7)); // [1,2,3,4,5,6,7,8,9,10]


  
function findUniqueElements(arr1, arr2) {
    var uniqueArr = [];
    for (var i = 0; i < arr1.length; i++) {
      if(arr2.indexOf(arr1[i]) === -1) {
        uniqueArr.push(arr1[i]);
      }
    }
    for (var j = 0; j < arr2.length; j++) {
      if (arr1.indexOf(arr2[j]) === -1) {
        uniqueArr.push(arr2[j]);
      }
    }
    return uniqueArr;
  }
  
  var arr1 = [1, 2, 3];
  var arr2 = [100, 2, 1, 10];
  console.log(findUniqueElements(arr1, arr2)); // [1,2,5,6]

  


  function unzip(arr);{ 
    let result = []; 
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr[i].length; j++) { 
            if (!result[j]) { 
                result[j] = [];// create a new array for every new element 
            } 
            result[j].push(arr[i][j]); 
        } 
    } 
    return result; 
} 

//example
let array = [['a', 1, true], ['b', 2, false], ['e', 'f']]; 
console.log(unzip(arr)); 

//output  [['a', 'c', 'e'], ['b', 'd', 'f']]






function unzip(arr) {
    // Find the length of the longest subarray
    const maxLength = Math.max(...arr.map(subArr => subArr.length));
  
    // Create an array of empty arrays
    const result = Array.from({ length: maxLength }, () => []);


function indexOn(array, keySelector) {
    const result = {};
  
    for (const item of array) {
      const key = keySelector(item);
      const value = Object.assign({}, item);
      delete value[key];
      result[key] = value;
    }
  
    return result;
  }
  const array = [
    { id: 10, name: 'apple' },
    { id: 20, name: 'orange' }
  ];
  const output = indexOn(array, x => x.id);
  console.log(output);
  
  
    // Iterate over the input array
    for (let subArr of arr) {
      // Iterate over the elements of each subarray
      for (let i = 0; i < maxLength; i++) {
        // Push the element to the corresponding position in the result array
        result[i].push(subArr[i]);
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(unzip([['a', 1, true], ['b', 2, false]]));
  console.log(unzip([['a', 1, true], ['b', 2]]));
  


function findUniqueValues(numbers) {
    const uniqueValues = [...new Set(numbers)];
    return uniqueValues;
  }
  
  // Test cases
  const test1 = [1, 2, 2, 3, 4, 4, 5];
  const test2 = [1, 2, 3, 4, 5];
  const test3 = [1, -2, -2, 3, 4, -5, -6, -5];
  
  console.log(findUniqueValues(test1)); // Output: [1, 2, 3, 4, 5]
  console.log(findUniqueValues(test2)); // Output: [1, 2, 3, 4, 5]
  console.log(findUniqueValues(test3)); // Output: [1, -2, 3, 4, -5, -6]
  

function generatePermutations(array) {
    const permutations = [];
  
    function permute(arr, current = []) {
      if (arr.length === 0) {
        permutations.push(current);
        return;
      }
  
      for (let i = 0; i < arr.length; i++) {
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        permute(remaining, current.concat(arr[i]));
      }
    }
  
    permute(array);
  
    return permutations;
  }
  
  // Test cases
  const test1 = [1, 33, 5];
  const test2 = [1, 3, 5, 7];
  const test3 = [2, 4];
  
  console.log(generatePermutations(test1));
  console.log(generatePermutations(test2));
  console.log(generatePermutations(test3));
  


function removeFalseValues(input) {
    if (Array.isArray(input)) {
      return input.filter(Boolean).map(removeFalseValues);
    }
  
    if (typeof input === 'object' && input !== null) {
      const result = {};
      for (const key in input) {
        if (input.hasOwnProperty(key)) {
          const value = removeFalseValues(input[key]);
          if (value !== false) {
            result[key] = value;
          }
        }
      }
      return result;
    }
  
    return input;
  }
  
  // Test case
  const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
  };
  
  const output = removeFalseValues(obj);
  console.log(JSON.stringify(output));
  

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function checkAllPrimes(array) {
    const areAllPrimes = array.every(isPrime);
    return areAllPrimes;
  }
  
  // Test cases
  const test1 = [2, 3, 5, 7];
  const test2 = [2, 3, 5, 7, 8];
  
  console.log("Original array of integers: " + test1.join(","));
  console.log("In the said array check every number is prime or not! " + checkAllPrimes(test1));
  
  console.log("Original array of integers: " + test2.join(","));
  console.log("In the said array check every number is prime or not! " + checkAllPrimes(test2));
  

function findThirdSmallest(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const thirdSmallest = sortedNumbers[2];
    return thirdSmallest;
  }
  
  // Test cases
  const test1 = [2, 3, 5, 7, 1];
  const test2 = [2, 3, 0, 5, 7, 8, -2, -4];
  
  console.log("Original array of numbers: " + test1.join(","));
  console.log("Third smallest number of the said array of numbers: " + findThirdSmallest(test1));
  
  console.log("Original array of numbers: " + test2.join(","));
  console.log("Third smallest number of the said array of numbers: " + findThirdSmallest(test2));
  


function sumNumbers(array) {
    let total = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        total += array[i];
      }
    }
  
    return total;
  }
  
  // Test cases
  const test1 = [2, "11", 3, "a2", false, 5, 7, 1];
  const test2 = [2, 3, 0, 5, 7, 8, true, false];
  
  console.log("Original array: " + test1.join(","));
  console.log("Sum all numbers of the said array: " + sumNumbers(test1));
  
  console.log("Original array: " + test2.join(","));
  console.log("Sum all numbers of the said array: " + sumNumbers(test2));
  


function isFactorChain(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] % array[i] !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test cases
  const test1 = [2, 4, 8, 16, 32];
  const test2 = [2, 4, 16, 32, 64];
  const test3 = [2, 4, 16, 32, 68];
  
  console.log("Original array: " + test1.join(","));
  console.log("Check the said array is a factor chain or not?");
  console.log(isFactorChain(test1));
  
  console.log("Original array: " + test2.join(","));
  console.log("Check the said array is a factor chain or not?");
  console.log(isFactorChain(test2));
  
  console.log("Original array: " + test3.join(","));
  console.log("Check the said array is a factor chain or not?");
  console.log(isFactorChain(test3));
  



function findNaNIndexes(array) {
    const indexes = [];
  
    for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i])) {
        indexes.push(i);
      }
    }
  
    return indexes;
  }
  
  // Test cases
  const test1 = [2, NaN, 8, 16, 32];
  const test2 = [2, 4, NaN, 16, 32, NaN];
  const test3 = [2, 4, 16, 32];
  
  console.log("Original array: " + test1.join(","));
  console.log("Find all indexes of NaN of the said array: " + findNaNIndexes(test1));
  
  console.log("Original array: " + test2.join(","));
  console.log("Find all indexes of NaN of the said array: " + findNaNIndexes(test2));
  
  console.log("Original array: " + test3.join(","));
  console.log("Find all indexes of NaN of the said array: " + findNaNIndexes(test3));
  


function countArrays(array) {
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  // Test cases
  const test1 = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
  const test2 = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
  
  console.log("Number of arrays inside the said array: " + countArrays(test1));
  console.log("Number of arrays inside the said array: " + countArrays(test2));
  