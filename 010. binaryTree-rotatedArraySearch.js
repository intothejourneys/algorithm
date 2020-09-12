👉
// 정렬되어 있는 배열 중 일부를 왼쪽 혹은 오른쪽으로 회전시킨 배열이 주어졌을때, 어떻게 특정 element를 효율적으로 찾을 수 있을까요?
// 작성한 함수는 target의 index값을 return하고, 없으면 null을 return해야 합니다.

// 예시 :
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
// rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null

👉
// 정렬된 배열과 회전시킨 배열과 비정렬된 배열이 뭐가 다를까?
// 어차피 배열에서 요소 찾는 것은 같은 로직 아닌가?

//   for (let i = 0; i < rotated.length; i++) {
//     if (rotated[i] === target) {
//       return i;
//     }
//   }
//   return null;
// }; // 이렇게 해도 통과는 하지만 시간 복잡도가 O(n)이다

👉
// 정렬되지 않은 배열은 이진 탐색이 불가능하다
// 정렬된 배열을 이진 탐색 하는 것과 로테이트된 배열을 이진 탐색 하는 것은 다르다 // 정확히 중간에서 된거라면 상관 없다?
// 이진 탐색을 이용하면 전체를 순회하며 찾는 것보다 시간 복잡도를 줄일 수 있다
// log^(rotated.length)의 시간 복잡도를 가져야 한다

// n개의 원소를 가진 리스트에서 단순 탐색을 사용하면 최대 n번의 탐색이 필요하다.
// 이 것을 Big O 표기법으로 O(n)이라고 표기하고 선형 시간이라고 부른다.
// 이진 탐색을 사용하면 최대 log n번만에 답을 찾을 수 있다.
// 이 것을 Big O 표기법으로 O(log n)이라고 표기하고 로그 시간이라고 부른다.

// 즉, 원소가 8개일 때 단순 탐색으로는 8번의 탐색이 필요하지만, 이진 탐색으로는 3번의 탐색만이 필요하다(log2^8)

👉
const rotatedArraySearch = function (rotated, target) {

    let l = 0;
    let r = rotated.length - 1;
    
    while(l <= r) {
      let m = Math.floor((l + r) /2);
    
      if (rotated[m] === target) {
        return m;
      }
    
      if (rotated[l] <= rotated[m]) { 
        if (rotated[l] <= target && target < rotated[m]) { // target이 왼쪽에 있다면 // 이게 재귀 호출이 일어나야 하는데?
          r = m -1; // 탐색 범위를 l부터 m - 1 까지로 줄인다(반으로 접는다 / 오른쪽을 버린다) // 이런 것들이 재귀
        } else {
          l = m + 1; // 탐색 범위를 m + 1부터 r 까지로 늘인다(반으로 접는다 / 왼쪽을 버린다)
        }
      }
      else { // if ( rotated[m] <= rotated[r]) {
        if (rotated[m] < target && target <= rotated[r]) {
          l = m + 1;
        } else {
          r = m - 1;
        }
      }
    }
    return null;
};