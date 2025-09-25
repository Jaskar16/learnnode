let array = [1, 2, 3, 'asdas', true, [1, 2, 3]]
console.log(array);
console.log(array[2]);
console.log(array[5][1]);
array[3] = 'Hello';
console.log(array);
console.log(array.length);
array.push('new value');
console.log(array);
array.push(1, 3, 4, 'asdasd', 'asdasd');
console.log(array);
let text = array.join('o');
console.log(text);