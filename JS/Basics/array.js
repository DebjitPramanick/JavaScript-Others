let a = [4,2,5,1,9];
console.log(a.length);

console.log(a.indexOf(1))

a.push(67)
console.log(a)


a.unshift(23);
console.log(a)

a.pop()
console.log(a)

a.shift()
console.log(a)

a.splice(1,2) // 1 - start index , 2 - number of elemts to remove
console.log(a)

a.reverse();
console.log(a)

let b = [8,7,21,1,6];
a = a.concat(b);
console.log(a)