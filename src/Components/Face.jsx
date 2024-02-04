import React from "react";
import "./faces.css"
export default function Face(props){
    const styles= {
        display : "none"
    }
    return( 
        <div className="faces">
            {console.log(props.value)}
            <div className="face one" style={props.value == 1?{}: styles}>
                <span className="pip"></span>
            </div>
            <div className="face two" style={props.value == 2?{}: styles}>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
            <div className="face three" style={props.value == 3?{}: styles}>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
            <div className="face four" style={props.value == 4?{}: styles}>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
            <div className="face five" style={props.value == 5?{}: styles}>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
            <div className="face six" style={props.value == 6?{}: styles}>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div>
        </div>
    )
}