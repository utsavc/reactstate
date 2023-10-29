import React from "react"

export default function App() {
    const [val,setVal]=React.useState(0);

    function decrease(){
        setVal(prevVal=>val-1)
    }


    function  increase(){
        setVal(prevVal=>val+1)
    }




        return (    
            <div>
                <div className="state">
                    <h1 className="state--title">Counter Click</h1>
                    <div className="state--value stateSize">{val}</div>
                    <div className="flex">
                        <button onClick={decrease}>-</button>
                        <button onClick={increase}>+</button>
                    </div>
                </div>                
            </div>
    )
}

