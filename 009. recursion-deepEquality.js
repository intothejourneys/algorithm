👉
// https://github.com/codestates/help-desk/issues/2019

👉
// 두 개의 객체가 주어졌을 떄, 이 두 객체가 deeply equal한지 아닌지를 return하는 함수를 작성하세요.
// 여기서 "deeply equal"이란, 두 객체가 같고, 각각 객체의 자식 객체의 구조가 같다는 것을 의미합니다.

// 예시 :
// deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
// deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false

👉
  // Object.keys()를 활용할 것, 객체의 키로 이루어진 배열을 만들어주는 메소드
  
  // let appleArray = Object.keys(apple);
  // let orangeArray = Object.keys(orange);
  
  // for (let i = 0; i < appleArray.length; i++) {
  //   for (let j = 0; j < orangeArray.length; j++) {
  //     if (appleArray[i] === orangeArray[i]) { // 키만 들어있지 값을 모르니, 이걸로만은 안된다
                                                   // 그리고 이거는 굳이 이렇게 아니어도 그냥 appleArray === orangeArray 이렇게 비교해도 됨
  //       return true;
  //     }
  //   }
  // }
  // return false;
  // };

👉
  // json화 해서 JSON.stringify(obj1) === JSON.stringify(obj2) 이렇게 비교 가능..?
  // 우와 대박.. 15/16 개 통과..
  // 이제 객체 안 요소들의 순서에 상관없이 결과가 나오게 하려면.. for는 배열에서만 쓸 수 있고..
  
  //   if (JSON.stringify(apple) === JSON.stringify(orange)) {
  //     return true;
  //   } 
  //   else {
  //     return false;
  //   }
  // };

👉
  // if (_.isEqual(JSON.stringify(apple), JSON.stringify(orange)) === true) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  // }; // javascript에서 안되나보다

👉
  // let apple_1 = JSON.stringify(apple);
  // let orange_1 = JSON.stringify(orange);
  
  // if(apple_1 === orange_1) {
  //   for(Key in apple_1) { 
  //     for (Key in orange_1) {
  //       if(apple_1.Key === orange_1.Key && apple_1[Key] === orange_1[Key]) {
  //         return true;
  //       }
  //     }   
  //   }
  // }
  // return false;
  // }; // 마지막 하나가 꼭 통과가 안되네.. // 요소들의 순서에 관계 없이

👉
  // 인터넷으로 찾은 코드 + 내가 좀 고친 것.. 11/16 개 통과..
  
  //   apple과 orange는 객체이다.
  //   두 객체가 완전히 같은지 확인하려면 객체의 길이확인 후
  //   반복문을 활용해 같은 인덱스의 값들이 서로 같은지 확인한다.
  //   만약 어떤 인덱스의 값이 객체인경우 해당함수를 다시 호출해서 // 요 부분!
  //   재귀적으로 비교한다.
  
  // if(Object.keys(apple) !== Object.keys(orange)) {
  //     return false;
  // }
  // else{ // 객체 안의 키(배열화 한 요소)들이 서로 같다면,
  //     for(let i=0; i<Object.keys(apple).length; i++) { // 요소 중 객체 형태가 있다면(자식이 있다면)
  //         if(typeof(Object.keys(apple)[i])==='object' && typeof (Object.keys(orange)[i])==='object') { // 둘 다 자식이 있다면
  //             return deepEquals(Object.keys(apple)[i], Object.keys(orange)[i] ) // 재귀 호출하여 그 안을 비교
  //         }
  //     }
  // }
  // return true;
  // };

👉
  // 레퍼런스 코드
  const deepEquals = function (apple, orange) {

    if(apple === orange) { // 원시 값이 아닌 객체들은 메모리의 동일한 위치를 참조해야 동일하다고 볼 수 있다, 
      return true;         // 즉 단지 값만 같다고 해서 동일하다고 볼 수 없다
                           // 두 객체가 메모리의 동일한 위치를 참조하면(대입되었다, 같다) true; 
                           // 근데 아직도 어떻게 저렇게 간단하게 쓸 수 있는지 헷갈린다.. 
    }
    if(!(apple instanceof Object) || !(orange instanceof Object)) {
      return false; // 두 객체 중 하나라도 객체가 아니면 false;
    }
  
    // 순서 관련된 부분은 도대체 어디서 통과되는 건가?(16번째 테스트)
  
    let appleKeys = Object.keys(apple);
    let orangeKeys = Object.keys(orange);
    // 키를 가지고 배열화하여 길이 위주의 판단, 그리고 순회 및 자식 순회(재귀)
  
    if(appleKeys.length !== orangeKeys.length) {
      return false; // 두 객체의 키의 길이가 다르면 false;
    }
    if(appleKeys.length === 0) { 
      return true; // 두 객체가 모두 빈 객체이면 true;
    }
    // 즉, 두 객체의 키의 길이가 같거나(이렇게 이분법적으로 보면 안되겠지?), 두 객체 모두 빈 객체이면 true;
  
    for(var i = 0; i < appleKeys.length; i++){
      if(!deepEquals(apple[appleKeys[i]], orange[appleKeys[i]])) { // 재귀, 이런 경우 재귀를 쓰는게 좋다!
        return false; // 객체의 키를 순회하며 값에 자식이 있다면 재귀 호출 // 같지 않다면 false; 같다면 true;
      }
    }
  
    // 그런데 정작 키와 키의 값이 같은지에 대한 조건은 없다..
  
    return true; // 위에서 걸러지지 않은 모든 경우에 true;?
  };

👉
  //   if (JSON.stringify(apple) === JSON.stringify(orange) && JSON.stringify(apple).length === JSON.stringify(orange).length) {
  //     return true;
  //   } 
  //   else {
  //     return false;
  //   }
  // }; // 길이가 문제인가 해서 이렇게 해봤지만 여전히 순서 부분 통과 안된다