import React, { useState } from 'react';

const Usestateex = () => {
    const[value,setValue]=useState(10);
    const clickme = ()=>{
        setValue(value=>value+1)
    }
    return (
        <div>
            {value}
            <button onClick={clickme}> click</button>
            
        </div>
    );
};

export default Usestateex;