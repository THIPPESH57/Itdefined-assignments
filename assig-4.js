// 10th  custom filter
let numbers = [56, 45, 34, 67, 78, 99, 1020]


function customfilter(array, callback){
    let filteredarray = [];
    for (let i = 0; i < array.length ; i++){
        if(callback(array[i], i, array)){
            filteredarray.push(array[i])
        }
    }
    return filteredarray;
}


 let result = customfilter(numbers, el => el%2 !== 0)
 console.log(result)




//  14th calc letters


 function calcLetters(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        char = char.toLowerCase(); 
        if (/[a-z]/.test(char)) { 
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    return charCount;
}

let string = 'thippesh'

let result1 = calcLetters(string)
console.log(result1)


// 14th 


function countarray(numberarray){
    let count = {}
    numberarray.forEach(elem => {
        count[elem] = (count[elem] || 0) + 1
    })
    return count
}

let numberarray = [1,1,2,3,,4,44,5,5,6,1]

console.log(countarray(numberarray))




// 11th myreduce

function myreduce(array, callback, initialValue){
    let accumulator = initialValue === undefined ? array[0]: initialValue;
    for (let i = initialValue === undefined ? 1 : 0; i < array.length; i++){
    accumulator = callback(accumulator, array[i], i, array)
    }
    return accumulator
}

let number = [1,2,3,5,6,7,8]
let sum = myreduce(number,(accumulator, Element) => accumulator + Element)
console.log(sum)

// 8th return an unique array


function uniquearray(array){
    let uniqueArray = []
    let seen = new Set()

    for (let element of array){
        if(!seen.has(element)){
            uniqueArray.push(element);
            seen.add(element);

        }
    }
    return uniqueArray
}

array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,4,5,10]

let unique = uniquearray(array)

console.log(unique)




// 6th deep equal checker




function  deep(value1, value2){
    // check strict equaltiy
    if(value1 === value2){
        return true
    }


    // check typeof and null

    if(typeof value1 !== 'object'|| value1 === null ||typeof value2 !== 'object'|| value2 === null  ){
        return false
    }

    
    // check length of object

    let key1 = Object.keys(value1)
    let key2 = Object.keys(value2)

    if(key1.length !== key2.length){
        return false
    }

    for(let key of key1){
        if(!key2.includes(key)|| !deep(value1[key], value2[key])){
            return false
        }
    }
    return true


}




let value1 = {
    name : 'thippu',
    age : 24,
    place : {
        born : 'sira',
        living : 'sira'
    }
}

let value2 = {
    name : 'thippu',
    age : 24,
    place : {
        born : 'sira',
        living : 'sira'
    }
}


let deep1 =  deep(value1, value2)

console.log(deep1)

// 1. Find a 2nd maximum and Minimum number in an array 

function max(num){
     num.sort((a,b) => b-a)
     return num[1]
}

num = [1,3,4,,6,7,9]
console.log(max(num))

function min(num){
    num.sort((a,b) => a-b)
    return num[1]
}

// num = [1,3,4,,6,7,9]
console.log(min(num))

// 5. Write function to convert camelCase to snake_case


function camel(str){
    return str.replace(/[A-Z]/g, match =>'_'+match.toLowerCase())
}


let str = 'iAmAHuman'
let snake = camel(str)
console.log(snake)


function snakestring(camel){
    return str.replace(/_[a-z]/g, match =>match.toUpperCase())
}


let camel1 = 'i_am_human'
let camelstring = snakestring(camel1)
console.log(camelstring)



function unique1(array3){
    let arraynew = []
    let saw = new Set()

    for (let element of array3){
        if(!saw.has(element)){
            arraynew.push(element)
            saw.add(element)
        }

      
    }

    return arraynew

}

let one = [2,2,3,3,4,4,5,67,7,7,8]

let two = unique1(one)

console.log(two)



function reverseString(string){
    let reverse = '';
    for(let i = string.length -1; i >= 0; i--){
        reverse += string[i]
    }
    return reverse
}

let reverse = 'thippesh'

let stringreverse = reverseString(reverse)
console.log(stringreverse)




// 9th generate below pattern

function pattern(rows){
    let result = '';

    for (let i = 1; i <= rows; i++){
        let start = i;
        let diff = 1
        let current = start;

        for (let j = 1; j <= i; j++){
            result += current + ' ';
            current += diff * (rows - j)
        }
        result += '\n';
    }
    return result;
}
let five = pattern(5)

console.log(five)


// 12 fibonacci series


function fibonacci(num){
if(num <= 1){
    return num
}
else{
    let fib = [0,1]
    for(let i = 2 ; i <= num; i++){
        fib[i]= fib[i-1]+ fib[i-2]
    }
    return fib[num]
}

}


let series = fibonacci(14)

console.log(series)



// 16th  total marks in an object

function sumofmarks(subjectarray){
    let totalMarks = 0;

    subjectarray.forEach(obj => {
        totalMarks += obj.marks
    })
    return totalMarks
}

let subjectarray = [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]


console.log(sumofmarks(subjectarray))

// 20th  Write a function to remove the duplicate from 2 arrays,

function duplicateremove(array1, array2){
    let mergedarray = [...array1, ...array2]

    let differentarray =[ new Set(mergedarray)]

    return differentarray
}

let array1 = [3,4,5,6,7,8,8]
let array2 = [1,2,3,4,6,7,0]

let newarray = duplicateremove(array1,array2)

console.log(newarray)


// 10th program for adding zeros after 3 values in array 


function addingzeros(addingarray){
    let newArray = []

    for(let i = 0; i <addingarray.length; i++ ){
        newArray.push(addingarray[i])
        if( (i + 1)   % 3 === 0 ){
            newArray.push(0);
        }
    }
    return newArray
}


let addingarray = [1,2,3,4,5,6,7,8,9,10,12,13]

console.log(addingzeros(addingarray))


