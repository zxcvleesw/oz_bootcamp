// 논리연산자 : 여러 조건의 조합(and(&&), or(||))
// && = 둘 다 true인 경우에 true
// || = 둘 중 하나만 true면 true

let isAdult = true;
let hasTicket = false;

// let canPass = isAdult && hasTicket;
let canPass = isAdult || hasTicket;
console.log(canPass);