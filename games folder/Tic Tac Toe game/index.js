
let cells=document.querySelectorAll(".cell")
let winConditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
for(let cell of cells){
  cell.addEventListener("click",handleClick)
}
let circleTurn=false

function handleClick(event){
  let selectedCell=event.target

  let currentClass=circleTurn?"circle":"x"
  selectedCell.classList.add(currentClass)

  if (checkWin(currentClass)){
  document.querySelector(".final-winner").innerHTML=`Winner-${currentClass}`
  document.querySelector(".final-winner").parentElement.classList.add("show")
  }
  else if(checkDraw()){
    document.querySelector(".final-winner").innerHTML=`It's a Tie`
    document.querySelector(".final-winner").parentElement.classList.add("show");
  }

  else
  {circleTurn=!circleTurn}
}

function checkWin(currentClass){

  return winConditions.some((itemRows)=>{

    return itemRows.every((item)=>{

      return cells[item].classList.contains(currentClass)
    })
  })
}

let drawArr=[];

for(let cell of cells){
  drawArr.push(cell)
}

function checkDraw(){

  return drawArr.every((item)=>{
  return item.classList.contains("x") || item.classList.contains("circle")
  })
}

document.querySelector("button").addEventListener("click",()=>{
        window.location.reload()

})