class player {
  constructor(userName, score) {
    this.userName = userName;
    this.score = score;
  }
  setScore(score) {
    this.score = score;
  }
}

const player1 = new player('p1', 12);
console.log(player1);
