/* https://www.codewars.com/kata/5672a98bdbdd995fad00000f */

const rps = (p1, p2) => {

    var player1 = "Player 1 won!" ; 
    var player2 = "Player 2 won!" ; 

    if(p1===p2) return "Draw" ; 


    if(p1==="scissors" && p2==='paper') return player1; 
    if(p2==="scissors" && p1==='paper') return player2;

    if(p1==="paper" && p2==='rock') return player1 ; 
    if(p2==="paper" && p1==='rock') return player2 ; 

    if(p1==="rock" && p2==='scissors')  return player1 ;
    if(p2==="rock" && p1==='scissors')  return player2 ; 



}

rps('scissors','paper') ; 