👉 
// 두 개의 문자열을 매개변수로 받아 공통으로 가지고 있는 문자를 순서대로 return하는 함수를 작성하세요. (공백, 중복 제외)

// commonCharacters('acexivou', 'aegihobu') //결과 : 'aeiou'

👉 
const commonCharacters = function(string1, string2) {
    let stringArray1 = string1.split('');
    let stringArray2 = string2.split('');
  
    let result = [];
    for (let i = 0; i <stringArray1.length; i++) {
      for (let j = 0; j < stringArray2.length; j++) {
        if (stringArray1[i] === stringArray2[j]) {
          result.push(stringArray1[i]);
        }
      }
    }
    // 8/11개 통과, 겹치는걸 제거해야 한다
    for (let k = 0; k < result.length-1; k++) {
      if (result[k] === result[k+1]) {
        result.splice(k+1,1);
      }
    }
    // 겹치는걸 제거함, 9/11개 통과
    // 붙어있지 않은 단어 중에서도 겹치는걸 제거해야 한다
    let resultFinal = Array.from(new Set(result));
    // 붙어있지 않은 단어 중에서도 겹치는걸 제거함
    // 이제 띄어쓰기만 해결하면 된다
    let resultFinal1 = resultFinal.join(''); // 배열의 문자열화
    return resultFinal1.replace(/ /g,''); // 띄어쓰기 삭제
    // 10/11개 통과! advanced는 일단 패스
};

// 👉
// const commonCharacters = function(string1, string2) {

//   // 일단 두개의 문자열을 각각 배열에 문자별로 나누어 담는다
//   // for 문을 이용하여 string1을 먼저 돌린 후, string2를 돌려 겹치는 문자가 있으면 배열에 담는다

//   let string1split = string1.split('');
//   let string2split = string2.split('');
//   let result = [];

//   for (let i = 0; i < string1split.length; i++) {
//     for (let j = 0; j < string2split.length; j++) {
//       if (string1split[i] === string2split[j]) {
//         result.push(string1split[i]);
//       }
//     }
//   }
//   // return result; // array가 아닌 string을 반환해야 한다
//   // return result.join(''); // 또는 toString()
//   8 / 11
  
//   // 겹치는 문자 제거하기
//   // 문장일 경우 띄어쓰기 제거하기

//   for (let k = 0; k < result.length; k++) {
//     if (result[k] === result[k+1] || result[k] === ' ') { // 띄어쓰기는 통과 안됨
//       result.splice(k,1)
//     }
//   }

//   let result_1 = result.filter(function(el) {
//     return el !== ' ' // 콘솔 찍어보니 함수로 인식을 못함, 위와 같은 문제인 듯, ' ' 가 인식이 안됨?
//   })

//   function removeSpace() {
//     let result_1 = [];
//     removeSpace.forEach(r => result_1.push(r.trim()))
//   }
//   return result_1.join('');

//   // 여러개의 문자열을 비교할 경우(advanced)
//   // 개수도 모르는데 무조건 다 for 문을 돌릴 수는 없으니
  
// }