let obj = {
    name: 'Jaskar',
    age: 67,
    looks: 'CL',
    fruits: ['mango', 'banana', 'kiwi'],
    hiir: {
        age: 1,
        name: 'Cornelius',
        gender: 'male'
    },
    ParentName: 'Frederik',
    a2sd: 'asd',
    'parent-name': 'Name',
    'a2sd': 'asd',
    'some thing': 'asd2',
};

console.log(obj);
console.log(obj.name);
console.log(obj.fruits[1]);
console.log(obj.hiir.name);
console.log(obj['parent-name']);
console.log(Object.keys(obj));