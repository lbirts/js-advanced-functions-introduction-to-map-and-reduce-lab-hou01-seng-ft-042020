// Your code here
function mapToNegativize(arr) {
    // return arr.map(a => a * -1)
    let newarr = []
    for (const el of arr) {
        newarr.push(el * -1)
    }
    return newarr
}

function mapToNoChange(arr) {
    // return arr.map(a => a)
    let newarr = []
    for (const el of arr) {
        newarr.push(el)
    }
    return newarr
}

function mapToDouble(arr) {
    // return arr.map(a => a * 2)
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i] * 2);
    }
    return newarr
}

function mapToSquare(arr) {
    // return arr.map(a => a)
    let newarr = []
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i] ** 2);
    }
    return newarr
}

function reduceToTotal(arr, start = 0) {
    let total = start
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false;
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) return true;
    }
    return false
}