
//Team: Kim, CarlosAlberto, Farrah & Gabriel
//declaration of object properties
let gameBoard = {
  clearAll: document.querySelector('#clearAll'),
  cells: document.querySelectorAll('.game'),
  displayArea: document.getElementById('displayArea'),
  checkWin: (clickValue) => {
  console.log(clickValue)
    const win = [["1","2","3"],["4","5","6"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"],["7","8","9"]];
    // array of winning combinations
    // condition is set of nested arrays
    for(let condition of win){
      let hasWon = true;
      if(clickValue === 'X') {
        for(let i = 0; i < condition.length; i++){
          if (!xArray.includes(condition[i])){
            hasWon = false;
            break;
          }
        }
      } else {
        for(let i = 0; i < condition.length; i++){
        if (!oArray.includes(condition[i])){
          hasWon = false;
          break;
        }
      }
      // break to stop loop. if either x/y doesnt have winning condition then false
      }
      if (hasWon === true) {
        displayArea.innerHTML = clickValue + ' is the winner!'
        for(let i =0; i < gameBoard.cells.length; i++){
            gameBoard.cells[i].removeEventListener('click',clickAble,false);
          }
        return
      }
    }
  }
}
// if a winning combination then display message and for loop has removeEventListener with function expression clickAble to stop playing after a win
class Boxes {
  constructor(letter = "") {
    this.letter = letter;
    this.turn = 1;
    this.playerToggle = () => {
      let moves = 0;
      let clickValue="";
      while(moves<9){
        if(this.turn %2!==0){
          clickValue="X"
          moves++
          this.turn++
        }else{
          clickValue="O";
          moves++
          this.turn++
        }
        return clickValue
      }
    }
  }
};
// created class boxes with constructor that holds playerToggle(). tracks amount of moves. so x and o toggle on and off
const box = new Boxes("X")
box.letter
let xArray = []
let oArray = []
const clickAble = (event) =>{
  if(event.target.innerHTML === ''){
    let clickValue = box.playerToggle()
    event.target.innerHTML = clickValue;
    if(clickValue === "X"){
      xArray.push(event.target.id);
      gameBoard.checkWin('X',xArray);
    }else if (clickValue === "O"){
      oArray.push(event.target.id);
      gameBoard.checkWin('O',oArray);
    }
  }
}
// new object created. clickable holds new box playerToggle & starts when box is empty. empty arrays will have clickValue pushed into them and then called with checkwin
for(let i =0; i < gameBoard.cells.length; i++){
    gameBoard.cells[i].addEventListener('click', clickAble)
  };
// Targeting the tds of the table with loop and adding addEventListener with clickAble as parameter hears for starts of const box to begin
gameBoard.clearAll.addEventListener("click",removeAll => {
  xArray = []
  oArray = []
  console.log(xArray)
  console.log(oArray)
  gameBoard.cells.forEach(cell => {
    cell.innerHTML =""
  });
});
// clearall property of gameboard adding an addEventListener with function removeAll to empty all arrays and then target each td to make sure they return an empty string to clear it out



// ============== Previous Attempts =============
// // do we need a boolean for when the game is running on and off?
// // const tableElement = document.querySelector('#tableElement');
// let game = {
  // clearAll: document.querySelector('#clearAll'),
  // td: document.getElementsByTagName('td'),
  // cells: document.querySelectorAll('.game'),
  // displayArea: document.getElementById('displayArea');
  //
  // let xArray = []
  // let oArray = []
  //
  // for(let i =0; i < cells.length; i++){
  //   cells[i].addEventListener('click', function(event){
  //     if(event.target.innerHTML === '#'){
  //       let clickValue = playerToggle()
  //       event.target.innerHTML = clickValue;
  //       if(clickValue === "X"){
  //         xArray.push(event.target.id);
  //         checkWin('X',xArray);
  //       }else if (clickValue === "O"){
  //         oArray.push(event.target.id);
  //         checkWin('O',oArray);
  //       }
  //     }
  //   });
  // }
  // }
  //
  // const win = [["1","2","3"],["4","5","6"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];
  // function checkWin(clickValue, a){
  //
  //   for(let condition of win){
  //     let hasWon = true
  //     for(let i = 0; i < condition.length; i++){
  //       if (!xArray.includes(condition[i])){
  //         hasWon = false;
  //         break;
  //       }
  //     }
  //     if (hasWon === true) {
  //       displayArea.innerHTML = clickValue + ' is the winner!'
  //       return
  //     }
  //   }
  // }
  //
  // //const players = {
  // //   option1: "x",
  // //   option2: "y",
  // //   wins: 0,
  // //   loss: 0
  // //
  // // }
  // //
  // // function checkWin(){
  // //   const players = {
// //     option1: "x",
// //     option2: "y",
// //     wins: 0,
// //     loss: 0
// //   };
// // if(win === true){
// //   this.wins += 1;
// // }
// // }
// // function for object
// // checkBoxes:function() {
// //   return.this blank- this.blank;
// // }

// let moves= 0;
// let n = 1;
// function playerToggle() {
//     let clickValue="";
//     while(moves<9){
//         if(n %2!==0){
//             clickValue="X"
//             moves++
//             n++
//         }else{
//             clickValue="O";
//             moves++
//             n++
//         }
//       return clickValue
//     }
// };
//
// // reset for the game
// // let reset = document.querySelector("#clearA");
// // reset.style.cursor = "pointer"
// // reset.addEventListener("click",clickHandler,false);
// create a constructor for the tds
// -----------------
// let game = {
//   cells: document.querySelectorAll('.game'),
//   clear: document.querySelector('#clearAll'),
//
// }

// TIC TAC TOE AI:
//
// math.floor.random for starting position, checks winning combo array and tries to complete an array based off the starting position. If completing an array is not possible it uses math.floor.random for a new starting position. Computer uses a counter to count how many moves away from victory it is. and uses  .includes to check array of player, if the computer does not have 2/3 of a winning combo and the player has 2/3 of winning combo AI automatically blocks the player from completing their combination, if the AI has 2/3 and the player has 2/3 it will prioritize completing its own winning combo.
//
