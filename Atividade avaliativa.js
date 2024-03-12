let t = 1230;

let l = 10;

let c = 1;

if (t <= 0 || 1 <= 0) {
    console.log("Não é possivel realizar essa conta");

} else if (l % 1 != 0 || t % 1 != 0) {
    console.log("Não é possivel realizar essa conta");

} else {
    while (c <= l ) {
        let produto = t * c;
        console.log(t+ "x"+ c+ "="+ produto);
        c++;
    }
}