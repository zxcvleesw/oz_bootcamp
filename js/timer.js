// Timer API = 시간을 다루는 기능
// setTimeOut() -> 일정 시간이 지난 다음에 함수를 실행하는 기능
// setTimeOut(함수, 시간(ms))

// setTimeout(() => console.log("3초 경과"), 3000);


// setInterval(함수, 시간(ms)) -> 일정 시간마다 함수를 반복 실행
const timerId = setInterval (() => console.log("1초마다 실행"), 1000);
setTimeout(() => clearInterval(timerId),5000);


//함수 실행시키는 방법 -> '함수이름(인자)'
// '웹_API_함수'는 언제 싱행될까요? 코드 줄이 싱행된 순간, 그 즉시
// '화살표_함수'는 언제 실행될까요? 특정 조건을 만족한 순간에 실행