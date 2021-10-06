// ejercicio 3
// letra del medio en mayuscula

function ej3 (res) {
    if(res.length % 2 !=0){
        let impar = Math.floor(res.length / 2);
        res = res.slice(0, impar) + res[impar].toLocaleUpperCase() + res.slice(impar +1 );
        return res
    }
}