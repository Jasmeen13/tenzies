import React from "react";
import Face from"./Face.jsx"
export default function Dice(props){
    const styles= props.isHeld?{
        backgroundColor: "#59E391"
    }:{}
    return(
        <div>
        <div className="dice" style={styles} onClick={()=>{props.onDiceClick()}}>
            <Face value = {`${props.value}`}/>
        </div>
        </div>
    )
}