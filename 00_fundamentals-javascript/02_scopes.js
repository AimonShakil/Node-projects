// Scopes
//Global Scope & Block Scope
//{} curley braces is scope
//Values declared above {} are availbale as global scope to values inside block as well, but inside block values will not be

let a = 300;
if (true) {
    let a = 10;
    console.log(`Inner : ${a}`);
}
console.log(a);

//Nested Scopes
function one() {
    const username = "Aimon";
}
function two() {
    const website = "youtube";
    console.log(website); // not username
}
;

// Another
if (true) {
    let username = "Aimon";
    if (username === "Aimon") {
        const website = "VSCode";
        console.log(username + " " + website);
    }
}

// variable scope
var number1 = 1;
function varkeyword() {
    var number2 = 2;
    if (number1 + number2 == 3) {
        var number3 = 3;
    }
    console.log(number1);
    console.log(number2);
    //console.log(number3); throws error 
}
varkeyword();
// The number1 is a number that is globally declared. The number2 has the scope of the function it resides in. The number3, even if it’s declared in an if loop, it can be accessed in the function as it’s declared with the var keyword.
//Let Keyword
let numb1 = 1;
function let_keyword() {
    let number2 = 2;
    if (number1 + number2 == 3) {
        let number3 = 3;
    }
    console.log(number1);
    console.log(number2);
    // console.log(number3); // Throws error 
}
let_keyword();
//The number1 is a number that is globally declared. The number2 has the scope of the function it resides in. The number3 is declared in an if loop, it can be accessed only in the if loop, it’s block-scoped as it’s declared using the let keyword.
// let redeclaration
// let student_name: string = "rachel"; 
// let student_name: string = "john"; // Throws error 
// // Variable cannot be reassigned  
// const student_name: string = "rachel"; 
// student_name = "john"; 
//Const Variable declaration, The number1 is a number that is globally declared. The number2 has the scope of the function it resides in. The number3 is declared in an if loop, it can be accessed only in the if loop, it’s block-scoped as it’s declared using the const keyword. the const keyword is similar to let but the difference is that const variables can’t be reassigned, variables declared using let can be reassigned. 

const numbs1 = 1;
function const_keyword() {
    const number2 = 2;
    if (number1 + number2 == 3) {
        const number3 = 3;
    }
    console.log(number1);
    console.log(number2);
    //console.log(number3); // Throws error 
}
const_keyword();
export {};
