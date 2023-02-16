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
            for (let counter3 = 0; counter3 < number; counter3++) {
                console.log(counter, counter2, counter3);
            }
        }
    }
}

function logFunc(n, c) {
    if (n > 0) {
        console.log(n);
        n = Math.floor(n / 2);
        c++;
        return logFunc(n, c);
    } else {
        return c;
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let start = 0;
let end = arr.length - 1;
let target = 8;

function binarySearch(arr, start, end, target) {
    if (start > end) {
        return false;
    }
    let midIndex = Math.floor((start + end) / 2);
    if (arr[midIndex] === target) {
        return true;
    }
    if (arr[midIndex] > target) {
        return binarySearch(arr, start, midIndex + 1, target);
    } else {
        return binarySearch(arr, midIndex + 1, end, target);
    }
}

console.log(binarySearch(arr, start, end, target));


function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex, arr.length);


    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex += 1;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergeSort(arr));

function fib(n) {
    if (n >= 0 && n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6));

function f(n) {
    if (n === 0) {
        return 0;
    }
    for (let i = 0; i < n; i++) {
        return f(n - 1);
    }
}

console.log(f(6));



function countDown(n) {
    if (n === 0) {
        return 0;
    }
    return countDown(n - 1);
}

console.log(countDown(6));