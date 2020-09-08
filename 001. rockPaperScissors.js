// 세 판의 가위 바위 보를 하는 동안 낼 수 있는 모든 경우를 return하는 함수를 작성하세요.
// 결과는 다음과 같을 것입니다.

//   [
//     ["rock", "rock", "rock"],
//     ["rock", "rock", "paper"],
//     ["rock", "rock", "scissors"],
//     ["rock", "paper", "rock"],
//     // ...etc ...
//   ]

// 한 사람 기준,
// 한 판을 할 경우, 경우의 수는 3이다. 가위 또는 바위 또는 보.
// 판 수가 늘어날 수록 제곱을 해주면 된다.
// 즉 5판일 경우, 3^5가 전에 경우의 수

// 그러나 여기서는 경우 전체를 반환해야 한다, 수가 아니라.

// 재귀 함수

const rockPaperScissors = function() {

let game = ["rock", "paper", "scissors"]; // 하나의 경우를 담은 배열
let allGame = []; // 전체 경우를 담을 배열

for ( let i = 0; i < game.length; i++) {
  for (let j = 0; j < game.length; j++) {
    for (let k = 0; k < game.length; k++) {
      let temp = [];
      temp.push(game[i], game[j], game[k]) // 하나씩 차례차례 넣어지기 때문에 겹치지 않는다
      allGame.push(game[i], game[j], game[k])
    }
  }
}
  return allGame;
};

// Advanced: 변수로 전달하는 판수에 맞는 정답을 return 하도록 작성한 함수를 바꿔 보세요.

// rockPaperScissors(5);
// [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]

const rockPaperScissors = function(numOfGames) {

    if (numOfGames === 0) {
        return [];
    }

    let game = ["rock", "paper", "scissors"];
    let allGame = [];


   //


}
