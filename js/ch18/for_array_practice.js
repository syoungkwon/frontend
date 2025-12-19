const numbers = [3, 17, 2, 8, 25, 10];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > max) {
        max =+ numbers[i]
    }
}
console.log("최댓값:", max)