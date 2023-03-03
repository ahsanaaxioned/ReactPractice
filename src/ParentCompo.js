import React, { Component } from 'react'
import ChildCompo from './ChildCompo'

class ParentCompo extends Component {
    constructor() {
        super()
        this.state = {
            Parent: "Im Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.Parent} components from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildCompo onHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentCompo

