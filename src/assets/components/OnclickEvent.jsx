import React from 'react';

const OnclickEvent = () => {
    const[data,setData]=usestate(0)

    const handleClick=()=>{
         setData(data=>data+1)
    }
    return (

        <div>
            {data}
            <button onClick={handleClick}>click</button>
        </div>
    );
};

export default OnclickEvent;