import React, { useState } from 'react'

const MainReact = () => {

    const [value, setValue] = useState(0);

    const incr = () => {
        setValue(value + 1)
    }

    const decr = () => {
        if (value > 0) {
            setValue(value - 1)
        } else {
            setValue(0)
        }
    }

    const [backgroundColor, setBackgroundColor] = useState('');

    const handleColorChange = (event) => {
        setBackgroundColor(event.target.value);
    };

    const applyBackgroundColor = () => {
        document.body.style.backgroundColor = backgroundColor;
    };

    return (
        <>
            <div className='main'>

                <h3>
                    Counter Component
                </h3>


                <button className='incre' onClick={incr}>Increment</button>
                <p>{value}</p>
                <button className='decre' onClick={decr}>Decrement</button>


                {/* <div className='allcolor'>
                        <input type="text" value={color} onChange={ChangeColor} placeholder='Enter Color Name ' />
                        <button onClick={ChangeColor}> Click Here </button> 
                    </div> */}


                <div className='allcolor'>
                    <input type="text" onChange={handleColorChange} placeholder="Enter color name" />
                    <button onClick={applyBackgroundColor}>Submit</button>
                </div>

            </div>
        </>

    )
}

export default MainReact