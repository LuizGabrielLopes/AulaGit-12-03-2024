let a = (Math.floor(Math.random(1) * 101))

let b = (Math.floor(Math.random(1) * 101))

let tentativa = 0

while (a != b) {
    b = Math.floor(Math.random(1) * 101);
    if (b > a) {
        console.log("o numero certo e menor que", b);
    } else if (b < a) {
        console.log("o numero e maior que", b);
    } else {
        console.log("voce digitou o numero correto", a)
    }
    tentativa++
}
console.log("voce tentou", tentativa, "vezes");