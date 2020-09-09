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