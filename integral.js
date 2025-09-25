
function f(x) {
    return x * x - Math.cos(x);
}

function leftRiemannSum(f, a, b, n) {
    let h = (b - a) / n;  
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let x = a + i * h;
        sum += f(x);
    }
    return sum * h;
}

let a = parseFloat(prompt("Введите начало интервала a:"));
let b = parseFloat(prompt("Введите конец интервала b:"));
let n = parseInt(prompt("Введите количество разбиений n:"));

let result = leftRiemannSum(f, a, b, n);

alert("Результат интегрирования: " + result);
