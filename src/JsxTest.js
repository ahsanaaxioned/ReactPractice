// jsx and witout Jsx
import React from "react"
// const JsxTest = () => {
//     return (
//         <>
//         <h1 className="heading">Im Jsx Fregment</h1>
//         <div>
//             <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ad sunt soluta et commodi culpa atque quae ipsam nemo hic temporibus architecto, odit eos, adipisci voluptates quas aspernatur error cupiditate.
//             </p>
//         </div>
//         </>
//     )
// }

// without jsx
const JsxTest = () => {
    // return React.createElement('div','class = wjsx',"<h1>im without jsx</h1>")
     return React.createElement('div',{className:"jsx"},React.createElement("h2",{className:"heading"}, "im without JSX"))
}

export default JsxTest