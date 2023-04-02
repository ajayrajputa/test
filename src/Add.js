
import React,{useState} from "react"

function Add(){
     var[data,setdata]=useState(0)
     function changedata(){
        setdata(data + 1)
     }
 
    return(
    <div>
        <h1>{data}</h1>
        <button onClick={changedata}>Magic</button>
    </div>
  )
}
export default Add