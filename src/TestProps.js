// props practice
import React from "react";
// props with functional components
// const TestProps =(props)=>{
//     console.log(props)
//     return(
//        <h1>hello {props.name} {props.greet}</h1>
//     )
// }

// props with class components
class TestProps extends React.Component{
    render(){
        return(
            <h1>hello {this.props.name} {this.props.greet}</h1>
        )
    }
}
export default TestProps
