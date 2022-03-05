const a = 1; const b = 2; const c = 3;

let x = 0, y = 0, z = 0;

(function firstFunction () {
    const b = 5; const c = 6;
    z = c;
    (function secondFunction () {
        const b = 8;
        y = b;
        (function thirdFunction () {
            const a = 7; const c = 9;

            (function fourthFunction () {
                const a = 1; const c = 8
                x = a
            })()

        })()

    })()

})()

console.log(`a: ${x}, b: ${y}, c: ${z}`)