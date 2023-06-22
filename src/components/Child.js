import React from 'react'
const Child = ({ isLoggedIn, setIsLoggedIn }) => {
    let username = undefined;
    let password = undefined;
    return (
        <div className='child'>
            {
                (!isLoggedIn) && (
                    <form>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id='username' onChange={(event) => { username = event.target.value }} />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id='password' onChange={(event) => { password = event.target.value }} />
                        </div>
                        <button tyoe='submit'
                            onClick={(e) => {
                                console.log(username)
                                console.log(password)
                                e.preventDefault();
                                if (username != undefined && password != undefined) {
                                    setIsLoggedIn(true)
                                }
                            }}
                        >Login</button>
                    </form>
                )
            }
            {
                (isLoggedIn) && (
                    <p>You are logged in!</p>
                )
            }
        </div>
    )
}
export default Child