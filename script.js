let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
    return Math.ceil(Math.random()*10)
}

const compareGuesses=(humanGuesses, computerGuesses, target)=>{
    let close1 = target
    let close2 = target
    if (humanGuesses===target){
        return true
    }else if (compareGuesses===target){
        return false
    }else if (humanGuesses === target && compareGuesses ===target){
        return true
    }else{
        close1 = Math.abs(humanGuesses-target)
        close2 =  Math.abs(computerGuesses-target)

        if (close1<close2){
            return true
        }else{
            return false
        }
    }
    
}

const advanceRound = ()=>{
    currentRoundNumber++
}