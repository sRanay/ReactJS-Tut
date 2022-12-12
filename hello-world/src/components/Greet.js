import React from 'react'

// Function Components
// function Greet() {
//     return <h1>Hello Test</h1>
// }

// Named Exports
// ES6 Function
export const Greet = (props) => {
    console.log(props);
    return (
        <div> 
            <h1>
                Hello {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}
//export default Greet