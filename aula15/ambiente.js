let num = [5 , 2, 9]
num.push(12)
num.push(1)
num.sort()
console.log(`O vetor ${num} tem ${num.length} posições`)
let pos = num.indexOf(9)
console.log(`O valor 9 está na posição ${pos}`)