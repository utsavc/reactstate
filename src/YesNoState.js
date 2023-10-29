import React from "react"

export default function App() {
    //Array Destructuring
    //setIsImportant is a function that can change the value when an event is performed
    const [isImportant,setIsImportant] = React.useState("Yes")
    
    //change state is function that executes upon an event 
    function changeState() {
        //TernaryOperator
        setIsImportant(isImportant === "Yes" ? "No" : "Yes");
      }
      

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1 onClick={changeState}>{isImportant}</h1>
            </div>
        </div>
    )
}

