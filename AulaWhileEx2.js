let a = 0

let b = 10

let par;

let resultado = 0;


while (a < 1) {
    a = a + 1
}

for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        console.log(i)
        par = i;
        resultado = par + resultado;
    }

}

console.log("soma é igual a", resultado)