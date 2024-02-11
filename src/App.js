
import './App.css';
import Dice from './Components/Dice';
import { useState, useEffect } from 'react';
import "./Tenzies.css"
import Confetti from 'react-confetti'

function App() {
  function getNewDice(){
    const diceArr= [];
    for(let i =0;i<10;i++){
      diceArr.push(
        {value: Math.ceil(Math.random()*6),
        isHeld : false,
        id: i});
    }
    return diceArr;
  }
  const [allDice, setAllDice] = useState(getNewDice())
  const [gameWon, setGameWon] = useState(false)
  const [numOfRoll, setNumOfRoll] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())
  function onDiceClick(id){
    setAllDice(allDice=> allDice.map(dice=>{
      return dice.id===id?{...dice, isHeld: !dice.isHeld}: dice
    }))
  }
  
  function onRoll(){
    gameWon ? (setAllDice(getNewDice))
            : setAllDice(allDice=> allDice.map(dice=>{
      return dice.isHeld? dice: {...dice, value: Math.ceil(Math.random()*6)}
    }))
    if(gameWon){
      setGameWon(oldVal => !oldVal)
      setNumOfRoll(0)
      setStartTime(Date.now())
    } 
    else{
      setNumOfRoll(oldRoll=> oldRoll+1)
    }
  }
  
  useEffect(()=>{
      const allHeld = allDice.every(dice=>dice.isHeld);
      const first = allDice[0].value;
      const allEqual = allDice.every(dice=>first === dice.value)
      
      allHeld && allEqual && setGameWon(oldValue => !oldValue);
      
  },[allDice])

  const allDiceComponent = allDice.map(dice=>{
        return(<Dice value={dice.value} 
                    isHeld={dice.isHeld}
                    onDiceClick={()=>{onDiceClick(dice.id)}}
                    />)
  }) 

  function msToMins(time){
    let timeStr =""
    if(time/1000/60 >0){
      timeStr = Math.floor(time/1000/60) + " mins "
    }
    if(time/1000%60>0){
      timeStr = timeStr.concat(Math.floor(time/1000%60)+" secs")
    }
    return timeStr;
  }
  let endTime =0;
  function timeToWin(){
    if(endTime===0){
      endTime = Date.now()
    }
    console.log(endTime)
    return (endTime- startTime)
  }
  function bestTime(){
    const prevTime =  localStorage.getItem("TenziesTime");
    if(prevTime && (timeToWin()>prevTime))
      return prevTime;
    else{
      localStorage.setItem("TenziesTime",timeToWin());
      return timeToWin();
    }
    
  }
  return (
    <main className="App">
      {gameWon&&<Confetti width={window.width} height={window.height}/>}
      <div className="wrapper">
        <div className="game-container">
          <div className='game-header'>
            <div className="heading">Tenzies</div>
            <div className= "desc">Roll untill all dice are same. Click each dice to freeze it at its current value between rolls. </div>
          </div>
          <div className="dice-grid">
            {allDiceComponent}
          </div>
          <button className='roll' onClick={onRoll}>
            {gameWon?"New Game": "Roll"}
          </button>
          <div className="total-rolls">Total Rolls: {numOfRoll}</div>
          {gameWon && <div>Time to win: {msToMins(timeToWin())}</div>}
          {gameWon && <div>Best Win Time: {msToMins(bestTime())} </div>}
        </div>   
      </div>
    </main>
  );
}

export default App;
