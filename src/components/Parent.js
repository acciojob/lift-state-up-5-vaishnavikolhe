import React, { useState } from 'react'
import Child from './Child'
const Parent = () =>{
    let [isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <div className='parent'>
            <h1>Parent Component</h1>
            <Child 
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}
export default Parent