👉
// 특정 배열이 매개변수로 전달되는 배열의 부분집합인지를 판단하는 메소드를 만드세요. 비교 대상인 두 배열 모두 문자열로 이루어졌다고 가정합니다.

// let a = ['commit','push']
// a.isSubsetOf(['commit','rebase','push','blame']) // true
// 참고 : 배열 내의 중복값은 무시하세요.

// let b = ['merge','reset','reset']
// b.isSubsetOf(['reset','merge','add','commit']) // true

👉
// 두 배열을 각 배열당 겹치는 요소 없이 새 배열에 넣어준다
// 특정 배열의 길이가 매개변수 배열의 길이보다 길면 false
// 매개변수 배열이 includes(a[i])하면 true

// let newA = new Set(a);
// let newArray = new Set(array);
// 겹치는 요소들을 상쇄한 특정 배열과 매개변수 배열

// if (a.length > array.length) {
//   return false;
// }

// for (let i = 0; i < a.length; i++) {
//   if (array.includes(a[i])) {
//     return true;
//   }
// }
//   return false;

👉
Array.prototype.isSubsetOf = function(array) { // Array prototype constructor

  let arrayContains = function(array, item) { // 
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return true;
      }
    } // item이 array에 존재하면 true // 특정 배열의 요소 하나하나를 확인
    return false;
  };
  
  for (let i = 0; i < this.length; i++) { // constructor가 있기 때문에 사용할 수 있는 this
                                          // 여기서 this는 isSubsetOf를 적용할 배열, 즉 특정 배열이다
    if (!arrayContains(array, this[i])) { // for 문을 돌며 특정 배열의 요소 하나하나가 array에 포함되어 있는지 확인한다
      return false; // true가 먼저 나오면 하나라도 포함될 때 true가 되므로,
                    // 하나라도 포함되지 않으면 false로 해주는 것이 맞다
                    // 여기서도 break를 해주지 않아도 되나보다, 굳이 필요한건 아니어서?
    } 
  };
  return true;
};