function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');

    let result = 0;
    let currentnum = 0;
    let currentsign = 1;

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];

        if (!isNaN(char)) {
            currentnum = currentnum * 10 + parseInt(char);
        } else if (char === '+' || char === '-') {
            result += currentsign * currentnum;
            currentnum = 0;
            currentsign = (char === '+') ? 1 : -1;
        }

    }

    result += currentsign * currentnum;
    return result
}

console.log(evaluateExpression("3 + 5- 2 + 8"));
console.log(evaluateExpression("10 - 7 + 7 - 2"));
console.log(evaluateExpression("100 + 200 - 50"));
