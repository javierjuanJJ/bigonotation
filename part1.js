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

console.log((logFunc(6,0)));