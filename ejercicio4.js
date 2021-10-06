/*ejercicio 4*/
// buscar en le array el elemento baz 

let array = ["foo", "bar", "baz", "qux", "origin"];
let nuevoArray = array.find((elem)=> {
    return elem == 'baz';
})
console.log(nuevoArray);