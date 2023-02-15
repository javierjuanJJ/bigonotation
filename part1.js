function square(number) {
    for (let counter = 0; counter < number; counter++) {
        for (let counter2 = 0; counter2 < number; counter2++) {
            console.log(counter, counter2);
        }
    }
}

function cube(number) {
    for (let counter = 0; counter < number; counter++) {
        for (let counter2 = 0; counter2 < number; counter2++) {
            for(let counter3 = 0; counter3 < number; counter3++) {
                console.log(counter, counter2, counter3);
            }
        }
    }
}

function logFunc(n,c) {
    if (n > 0) {
        console.log(n);
        n = Math.floor(n / 2);
        c++;
        return logFunc(n,c);
    } else {
        return c;
    }
}


let arr=[1,2,3,4,5,6,7,8,9,10];
let start = 0;
let end = arr.length - 1;
let target = 8;

function binarySearch(arr, start, end, target) {
    if (start > end){
        return false;
    }
    let midIndex = Math.floor((start + end) / 2);
    if (arr[midIndex] === target){
        return true;
    }
    if (arr[midIndex] > target){
        return binarySearch(arr, start, midIndex + 1, target);
    }
    else {
        return binarySearch(arr, midIndex + 1, end, target);
    }
}

console.log(binarySearch(arr, start, end, target));