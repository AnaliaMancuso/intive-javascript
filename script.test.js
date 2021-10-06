const { expect } = require("@jest/globals"); 
let arr = ["foo", "bar", "baz", "qux", "origin"];

function ej1 (palabra) {
    return palabra[0].toLocaleUpperCase() + palabra.substring(1);
}

function ej2 (palabra) {
    return palabra.replace(palabra[palabra.length -1], palabra[palabra.length -1].toLocaleUpperCase())

}
function ej3 (res) {
    if(res.length % 2 !=0){
        let impar = Math.floor(res.length / 2);
        res = res.slice(0, impar) + res[impar].toLocaleUpperCase() + res.slice(impar +1 );
        return res
    }

}

function ej4 (arr) {
    return arr.find((elem)=> {
     return elem == 'baz';
    })

}

function ej5(arr) {
    arr = [];
    return arr.length;
}


test('upper the first letter', () => { 
  expect(ej1("str")).toBe("Str"); 
}); 

test('upper the last letter', () => { 
  expect(ej2("str")).toBe("stR"); 
}); 

test('upper the middle letter', () => { 
  expect(ej3("javascripts")).toBe("javasCripts"); 
}); 

test('find the element baz', () => { 
  expect(ej4(arr)).toBe("baz"); 
}); 

test('empty array', () => { 
  expect(ej5(arr)).toBe(0); 
}); 
