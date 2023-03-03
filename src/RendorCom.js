import React from "react"

function RendorCom(props) {
    // element variables method
    // let message
    // if (props.isLoggedIn) {
    //     message = <p>Hello User</p>
    // } else {
    //     message = <p>sorry you are not Loggedin</p>
    // }
    // return (
    //     <div>{message}</div>
    // )

    // if/else rendor method
    // if (props.isLoggedIn) {
    //     return <p>Hello User</p>
    // } else {
    //     return <p>sorry you are not Loggedin</p>
    // }

    // ternary operator render method
    // return <>
    //     {props.isLoggedIn ?
    //         <p>Hello User</p>
    //         :
    //         <p>sorry you are not Loggedin</p>
    //     }
    // </>

    // Short circuit operators method to render
    return props.isLoggedIn && <p>Hello User</p>

}

export default RendorCom
