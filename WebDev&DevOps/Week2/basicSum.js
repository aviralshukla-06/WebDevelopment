function sum(a, b) {
    return a + b;
}

ans = sum(5, 8)
// console.log(ans);


function sum1toN(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }

    return ans;
}

// ans = sum1toN(10);
// console.log(ans);

// else

function sumToNinO1(n) {
    let ans = 0;
    ans += n * (n + 1) / 2;
    return ans;
}

sum = sumToNinO1(10);
console.log(sum);


