let num = [1, 2, 3]
console.log(num)
num[3] = 4
console.log(num)
num[3] = 5
console.log(num)
num.push(6)
console.log(num)
for(let pos in num) {
    console.log(num[pos])
}
console.log(num.indexOf(6))