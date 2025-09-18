// Var: Las variables declaradas con var tienen un alcance global.
// Let y Const: Las variables declaradas con let y const tienen un alcance de bloque.

function testVarLetConst() {
    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;

        console.log("Dentro del bloque:");
        console.log("x:", x); // 1
        console.log("y:", y); // 2
        console.log("z:", z); // 3
    }
    
    console.log("Fuera del bloque:");
    console.log("x:", x); // 1
    console.log("y:", y); // ReferenceError: y is not defined
    console.log("z:", z); // ReferenceError: z is not defined
}

testVarLetConst();
