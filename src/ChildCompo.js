import React from 'react'

function ChildCompo(props) {
  return (
    <div>
      <button onClick={()=>props.onHandler('child')} >Click On Me</button>
    </div>
  )
}

export default ChildCompo
