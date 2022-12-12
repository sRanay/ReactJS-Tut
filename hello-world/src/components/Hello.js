import React from 'react'

const Hello = () => {
    // return (
    //     <div className='test'>
    //         <h1>Hello Test</h1>
    //     </div>
    // )
    return React.createElement('div', {id : "hello", className: "test"}, React.createElement('h1', null, 'Hello Tt'))
}

export default Hello