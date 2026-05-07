// 함수(Function)

function add(num1,num2){
    //반환(return) = 호출부로 값을 되돌려 주는것
    return num1 + num2
}

function wrapper(func){
    const result = func(1,2);
    console.log(result)
}

// 함수 그 자체
add

// let result = add(1,2);
// console.log(result);

console.log(add(1,2));

// 호출부(호출하는 곳) -> add 함수 호출 -> add 함수 실행 -> 결과값 반환

// console.log(add);
// let myFuntion = add;
// console.log(myFuntion);

wrapper(add);
// console.log(add(1, 2, 3)); //3번째 매개변수는 무시됨

//print라는 새로운 함수 정의
function print(message){
    console.log(message);
}

const printResult = print("hello");
console.log(printResult);