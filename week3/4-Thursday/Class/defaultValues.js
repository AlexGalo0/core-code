function foo(a,b) {
    return a-b ; 
}

function bar(c) {
    let result =foo(10,10) || 1 ;  //Short Circuit Evaluation
    if(result==0)result = 1 ; 
    return c/result ; 
}
console.log(bar(90)) ; 