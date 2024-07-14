function fiboSeries(n) {

    let n1 = 0, n2 = 1, next;

    for (let i = 0; i<=n; i++) {
        console.log(n1);
        next = n1 + n2;
        n1 = n2;
        n2 = next;

    }

}

console.log("Fibonacci series:")
fiboSeries(5);