// 임의의 string이 주어졌을 때, 문자열 내에서 최초로 반복하지 않는 문자를 return하는 함수를 작성하세요.

// firstNonRepeatedCharacter('ABA'); // => 'B'
// firstNonRepeatedCharacter('AACBDB'); // => 'C'

const firstNonRepeatedCharacter = function(string) {
    
    // 스트링을 split으로 문자 하나씩 분리한다
    // 인덱스 0부터 두개씩 비교한다 // 콜백?
    // 앞 인덱스와 같지 않은 첫번째 인덱스의 값을 반환한다
  
    // let empthArray = [];
    // let splitedString = string.split('');
    // empthArray.push(splitedString); // emptyString = ['s', 't', 'r', 'i', 'n', 'g'];
  
    // for (let i = 0; i < empthArray.length; i++) {
    //   if (empthArray[i] !== empthArray[i+1]) {
    //     // break;
    //     return empthArray[i+1];
    //   }
    // }
  
    // charAt() 문자열에서 주어진 인덱스에 해당하는 값(문자)
  
  for (let i = 0; i < string.length; i++) {
    let a = string.charAt(i); // a = 문자열에서 i번째에 있는 문자
    if (string.indexOf(a) === i && string.indexOf(a, i + 1) === -1) { // a의 인덱스가 i일 때, i + 1 이 a가 아니면(-1) a를 반환
      return a;
    } // break를 하지 않아도 되는가, 꼭 필요한 것은 아니라?
  }
    return null;
};