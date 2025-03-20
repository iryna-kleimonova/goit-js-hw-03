function filterArray(numbers, value) {
    // створюємо порожній масив
    let newNumbers = [];
    for (const number of numbers) {
        // перевіряємо чи число з масиву більше за значення value
        if (number > value) {
            newNumbers.push(number);
        }
    }
    return newNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
