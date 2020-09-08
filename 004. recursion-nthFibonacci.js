👉
// 피보나치 수는 첫째 및 둘째 항이 1입니다. 그 뒤의 모든 항은 바로 앞 두 항의 합인 수의 나열입니다.

// 다음과 같은 규칙을 가집니다.
// 1 1 2 3 ...

// 재귀를 이용하여 피보나치 수열의 n번째 항을 return하는 함수를 작성하세요.

👉
// 피보나치 수열의 규칙을 정의한다
 
// let fibonacci;
// Array.isArray(fibonacci) === true; // 피보나치는 배열이다
  
// let i = 0;
// while (i < fibonacci.length) { 
//   fibonacci[i] + fibonacci[i + 1] === fibonacci[i + 2];
//   i++;
// } // 피보나치 배열의 규칙, 길이를 모르는 배열
    
// if (n === i + 2) {
//   return fibonacci[n];
// }

👉
const nthFibonacci = function(n) {

  if (n <= 1) {
    return n;
  } 
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// 너무 어렵게 생각하지 말자
// 시간 복잡도를 줄이기 위해 새로운 방법들 찾아 공부해 보기