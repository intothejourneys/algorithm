👉
// 배열이 주어졌을 때, 이 중 3개의 숫자를 곱하여 나올 수 있는 최대값을 return하는 함수를 작성하세요.

// largestProductOfThree([2, 1, 3, 7]) === 42
// Advanced : 음수가 포함되었을때, 작동할 수 있도록 작성하세요.

👉
// const largestProductOfThree = function(array) {

//   let minusArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       minusArray.push(Math.abs(array[i])); // 음수인 요소들의 절대값을 넣은 배열
//     }
//   }
//   if (2 <= minusArray.length) {
//     let newMinusArray = [];
//       newMinusArray.push(Math.max.apply(...minusArray)); // 그 배열에서 가장 큰 수를 새 배열에 담기
//         minusArray.splice(minusArray.indexOf(max), 1); // 그 수를 잘라내기
//           newMinusArray.push(Math.max(...minusArray)); // 다시 한번 반복(두번째로 큰 수를 새 배열에 담기) // 음수의 경우 최대 2개까지만(- * - = +)
//   }

//   let plusArray = [];
//   let cloneArray = array.slice(); // 원본 배열의 손상을 막기 위해 복제 배열
//   for (let i = 0; i < cloneArray.length; i++) {
//     plusArray.push(Math.max(...cloneArray));
//       cloneArray.splice(cloneArray.indexOf(max), 1);
//         plusArray.push(Math.max(...cloneArray));
//           cloneArray.splice(cloneArray.indexOf(max), 1);
//             plusArray.push(Math.max(...cloneArray)); // 배열에서 가장 큰 수 3개를 넣은 새 배열(양수).. 하드 코딩이다.. 시간 복잡도..
//                                                      // 일단 해보고 레퍼런스 보며 새로운 방법 공부해보자
//   }

//   // 현재까지 newMinusArray에는 절대값화 되었을 때 가장 큰 음수 2개가, plusArray에는 가장 큰 양수 3개가 들어있다
//   // 이들 중 가장 큰 3개 수의 곱을 리턴하면 된다

//   let biggestFiveNumbers = newMinusarray.concat(plusArray);

//   let biggestThreeNumbers = [];
//   for (let i = 0; i < biggestFiveNumbers.length; i++) {
//     biggestThreeNumbers.push(Math.max(...biggestFiveNumbers));
//       biggestFiveNumbers.splice(biggestFiveNumbers.indexOf(max), 1);
//         biggestThreeNumbers.push(Math.max(...biggestFiveNumbers));
//           biggestFiveNumbers.splice(biggestFiveNumbers.indexOf(max), 1);
//             biggestThreeNumbers.push(Math.max(...biggestFiveNumbers));
//   }
  
//   return biggestThreeNumbers.reduce( (a,b) => a * b );

//   // 아니다.. 음수가 1개 들어가면 안된다.. 음수는 꼭 2개여야만 하네..
//   // 그리고 max가 무슨 이유에서인지 작동하지 않는 것 같다..
// };

👉
// 메소드를 만든다, 안에서 쓰인 sort() 메소드는 숫자들을 오름차순 정렬한다
// 따라서 sortAscending() 메소드는 배열 안의 숫자들을 오름차순 정렬하는 메소드가 된다

Array.prototype.sortAscending = function() { // 오름차순으로 정렬하는 배열 프로토타입 함수
    this.sort(function(a, b) { // 생성자에서 this에 유의, 주어진 배열을 뜻한다?
      return a - b; // 두개의 숫자가 인자로 들어오면 a 에서 b 방향으로 오름차순 정렬
    });
    return this; // 정렬된 배열을 반환?
  };
  
  var largestProductOfThree = function(array) {
  
    array = array.slice().sortAscending(); // 배열 안의 숫자들을 오름차순 정렬한 새로운 배열
                                           // 왜 굳이 같은 배열에 slice()를 써서 복제해 주었는지 모르겠다, 그래도 새로운 배열이니까!
  
    var secondFromLast = array[array.length - 2], // 두번째로 큰 숫자(인덱스이므로 -2)
        thirdFromLast = array[array.length - 3]; // 세번째로 큰 숫자
  
    return Math.max(array[array.length - 1] * secondFromLast * thirdFromLast, // 가장 큰 세개 숫자의 곱
                      array[array.length - 1] * array[0] * array[1]); // 가장 큰 숫자 * 가장 작은 숫자 두개(음수일 경우 최대 절대값)의 곱
                                                              // 중 더 큰 숫자가 반환
  };