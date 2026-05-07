// calculator.js
// 연산자와 조건문을 활용한 콘솔 계산기

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "오류: 0으로 나눌 수 없습니다.";
    }
    return num1 / num2;
  } else if (operator === "%") {
    return num1 % num2;
  } else {
    return "오류: 지원하지 않는 연산자입니다. (+, -, *, /, % 만 사용 가능)";
  }
}

function startCalculator() {
  console.log("=============================");
  console.log("      콘솔 계산기 시작!      ");
  console.log("=============================");
  console.log("사용 가능한 연산자: + - * / %");
  console.log("종료하려면 'exit' 입력\n");

  rl.question("첫 번째 숫자를 입력하세요: ", (input1) => {
    if (input1 === "exit") {
      console.log("계산기를 종료합니다.");
      rl.close();
      return;
    }

    const num1 = parseFloat(input1);

    if (isNaN(num1)) {
      console.log("오류: 숫자를 입력해주세요.\n");
      startCalculator();
      return;
    }

    rl.question("연산자를 입력하세요 (+, -, *, /, %): ", (operator) => {
      if (operator === "exit") {
        console.log("계산기를 종료합니다.");
        rl.close();
        return;
      }

      rl.question("두 번째 숫자를 입력하세요: ", (input2) => {
        if (input2 === "exit") {
          console.log("계산기를 종료합니다.");
          rl.close();
          return;
        }

        const num2 = parseFloat(input2);

        if (isNaN(num2)) {
          console.log("오류: 숫자를 입력해주세요.\n");
          startCalculator();
          return;
        }

        const result = calculate(num1, operator, num2);
        console.log(`\n결과: ${num1} ${operator} ${num2} = ${result}\n`);

        rl.question("계속 계산하시겠습니까? (y/n): ", (answer) => {
          if (answer === "y" || answer === "Y") {
            console.log("");
            startCalculator();
          } else {
            console.log("계산기를 종료합니다.");
            rl.close();
          }
        });
      });
    });
  });
}

startCalculator();
