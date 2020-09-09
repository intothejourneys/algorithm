👉
// 주어진 Tree 클래스에 DFSelect 메소드를 구현하세요.
// DFSelect 매소드의 요구사항은 아래와 같습니다.

// filter 함수를 매개변수로 받습니다.
// tree 의 각 node는 해당 filter 함수를 깊이 우선 방식으로 호출합니다.
// filter 함수를 만족(return true)하는 tree의 node를 1차원 배열로 반환합니다.

// let root1 = new Tree(1);
// let branch2 = root1.addChild(2);
// let branch3 = root1.addChild(3);
// let leaf4 = branch2.addChild(4);
// let leaf5 = branch2.addChild(5);
// let leaf6 = branch3.addChild(6);
// let leaf7 = branch3.addChild(7);

// root1.DFSelect(function (value, depth) {
//   return value % 2;
// })
// // [1, 5, 3, 7]

// root1.DFSelect(function (value, depth) {
//   return depth === 1;
// })
// // [2, 3]

// value를 저장하는 기본적인 tree입니다.

let Tree = function(value) {
    this.value = value; // 노드가 가지는 값(주어진 값)
    this.children = []; // 노드의 자식
};

👉
// 깊이 우선 방식, 트리를 왼쪽부터 아래로 쭉 내려가며 찾는다, 더이상 내려갈 것이 없을 때 옆으로 옮겨간다
// 탐색하며 각 노드에서 filter를 호출하고 값이 true이면 해당 노드를 1차원 배열에 넣는다
// 다 탐색한 후 해당 배열을 반환한다
  
// 그 과정만 정의해 주면 된다
// filter가 무엇을 필터링 하는지는 여기서 다루지 않는다

👉
Tree.prototype.DFSelect = function(filter) { // 클래스, 필터를 매개변수로 받는다
  
  let filtered = []; // 1차원 배열
  
  function traversing(node, depth) { // 탐색(depth 0의 node)
    if (filter(node.value, depth)) { // depth 0의 node의 value를 filtering한 결과가 true이면
      filtered.push(node.value); // 1차원 배열에 node.value를 담는다
    }
    if (node.children.length > 0) { // 해당 node에 자식이 있다면
      for (let i = 0; i < node.children.length; i++) { // 자식의 수만큼 순회
      traversing(node.children[i], depth + 1); // depth 1의 node.children들을 탐색하여, 위의 과정을 거쳐 1차원 배열에 담기
      }
    }
  }
  
  traversing(this, 0);
  return filtered;
};
  
// 이 아래로는 아무 것도 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  

// child를 추가합니다.
// (Tree가 아닌 값이 들어올 경우, Tree 객체 형태로 변환 후 추가합니다.)

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // 편의를 위해 추가된 child node를 return합니다.
  return child;
};
  
// 주어진 tree가 이미 해당 tree 혹은 sub tree의 child인지 확인합니다.

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
  // `child`는 해당 트리와 연결된 하위 노드를 의미합니다.
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};
  
// child를 삭제합니다.
  
Tree.prototype.removeChild = function(child) {
  let index = this.children.indexOf(child);
  if (index !== -1) {
    // child를 삭제합니다.
    this.children.splice(index, 1);
  } else {
  throw new Error('That node is not an immediate child of this tree');
  }
};
  